# Architectural Constitution: Schema-Driven UI

> **SEVERE WARNING**
> It is strictly forbidden to define **any** frontend variables, field lists, column names, labels, icons, ordering rules, or UI configuration inside the frontend code.
> Any violation is considered **dead legacy code** and must be removed immediately.

## Core Principle: Backend is the Single Source of Truth

The frontend is a **dumb renderer**. It knows nothing about data structure or presentation rules except what the **backend schema** dictates.

* **The schema (Database + Smart Features) is the only source of truth**: every field, relationship, label, and UI behavior is derived from real tables and official metadata (e.g., language tables and `smart_features`), never from random frontend configs.
* The base table and its language table are treated as **one unified entity** across retrieval, display, and input.

---

## 1) Vertical Language Unity (Vertical Language Model)

We follow a **Vertical Language Model**: a base table (e.g., `clinic_services`) and its translation table (e.g., `clinic_services_lang`) are **one indivisible entity** in the system.

### Rules

1. **Automatic Flattening**

   * On read, the backend flattens the correct translation fields (based on the active session language, e.g., `ar` or `en`) directly into the root record.
   * Example: `record.name` returns the correct language value without the UI knowing about any `_lang` table.

2. **Complete Transparency**

   * The frontend must not reference or depend on `_lang` tables.
   * The UI consumes a single unified object only.

3. **Language Field Is Dynamically Switchable**

   * When the session language changes, flattened language fields update immediately with **no frontend logic**.

4. **One Vertical Payload**

   * When constructing records in `smart_features`, the backend must merge:

     * direct/base columns,
     * flattened language columns,
     * FK objects,
       into one coherent “vertical” record structure.

### Base + Lang Table Rule

* Every data table must have a matching translation table named with the `_lang` suffix
  Example: `clinic_referral_doctors` + `clinic_referral_doctors_lang`.
* Base tables contain system fields such as: `id`, `company_id`, `begin_date`.
* Translatable fields live in the `_lang` table.

---

## 2) Unified Record Object Structure

Every row returned from the backend must follow a strict unified structure containing **three column types**:

### A) Direct Columns (Base Columns)

Raw values unaffected by language.
Examples: `price`, `created_at`, `code`.

### B) Flattened Language Columns

Text fields stored in `_lang` physically, but delivered at the root.

* Source: `_lang` table
* Behavior: backend selects the correct language value
* UI consumption: `record.name` (no `name_en`, no `name_ar`, no nested `lang`)

### C) Foreign Key Columns as Objects (FK Objects)

Every FK must be delivered as a **full object**, not a primitive ID.

* **Rejected**: `doctor_id: "uuid-123"`
* **Accepted**: `doctor: { "id": "uuid-123", "display_name": "Dr. Ahmed" }`

**Golden Rule:** The frontend never performs lookups to resolve FK names. Display text arrives fully resolved from the backend.

---

## 3) Deep Display Name Rule (Recursive Display)

The “display name” of any record is determined centrally and consistently via `smart_features`.

### Display Name Cascade (Priority)

1. `display_rule` (explicit schema rule, supports composition)
2. `translations.display_name` (if part of the unified flattened language output)
3. `name` / `title` / `label` (common semantic fields)
4. `code` (if semantically meaningful)
5. `id` (last resort)

### Deep Recursion

If `display_rule` references an FK field, the system must recursively resolve the FK’s own display name using the same rules (including language flattening).

---

## 4) Vertical Language Architecture & Record Experience

Language is not a UI addon. It is a vertical slice of the record itself.

### 4.1 Unified Record Definition

In the UI component layer, we never deal with separated base and translation rows.

**Record = Base Row + Flattened Translation Row + FK Objects**

### 4.2 The Three Strict Column Categories

1. **Direct value** (base table)
2. **Flattened language field** (translation table, flattened into root)
3. **FK object** (`{ id, display_name }`)

### 4.3 FK Input Rules

* FK inputs must always be selection-based (Select/Combobox), never raw text.
* FK identification must come from:

  * explicit schema (`smart_features.columns` with `source: "fk"`), or
  * real DB foreign keys, or
  * strict naming conventions (e.g., `_id`) **only if the backend enforces object output**.

---

## 5) Module Hierarchy & Field Grouping

### 5.1 Hierarchical Module System

Navigation is driven by a strict recursive tree:

* Modules are nodes: `id`, `parent_id`, `labels`, `icon`
* Tables are leaves assigned to module IDs
* The frontend must render the module tree exactly as delivered (no manual grouping “types” like settings/reports invented in UI).

### 5.2 Field Grouping (Tabs & Sections)

To avoid “wall of inputs” and “wall of data”, grouping is schema-driven.

* Groups are defined in `smart_features.settings.groups` (e.g., `basic`, `contact`, `medical`)
* Columns reference their group via `group: "contact"`

**UI Rules (Tables)**

1. Default view shows **only the first group** (e.g., `basic`).
2. Other groups remain hidden behind controlled UI toggles (tabs/expanders/group selectors) driven by schema.
3. Any column with `is_table_show: true` must appear even if its group is hidden.
4. Record context actions must support a full “Profile View” modal organized by the same sections, with print support.

**UI Rules (Forms: View/Edit/Create)**

1. Inputs must follow the same group/tab structure from schema.
2. Never dump all fields into one long form.
3. View mode mirrors the same structure in read-only presentation.
4. Create/Edit uses the same grouping to prevent field chaos.

---

## 6) Rendering Contract: The Frontend as a Schema Renderer

The frontend’s only job is to:

* fetch schema + records,
* render components based on schema,
* bind inputs back to the backend payload format.

The frontend must not:

* invent labels,
* decide ordering,
* pick searchable fields,
* hardcode icons,
* manually resolve relations,
* define which columns appear,
* define grouping rules.

All of the above come from the schema.

---

## 7) The Seven Sins (Absolute Prohibitions)

1. **Forbidden**: `const FIELDS = [...]` or any manual field list.
2. **Forbidden**: hardcoded strings for labels or translations.
3. **Forbidden**: choosing icons in frontend code.
4. **Forbidden**: manual column ordering. Ordering must come from `smart_features.columns.sort`.
5. **Forbidden**: manually defining searchable fields in UI.
6. **Forbidden**: manual relationship binding or lookup logic in the UI.
7. **Forbidden**: treating `foo_id` as a displayable primitive. FKs must be objects.

---

## 8) Internationalized Modules, Groups, Columns

* Every Module, Group, and Column must have bilingual `labels` in the schema (e.g., `{ "ar": "<ar_label>", "en": "Settings" }`).
* UI text must be sourced from schema labels or flattened language fields, never from hardcoded UI strings.
* When the backend merges Direct + Lang + FK inside `smart_features`, each entity must retain its bilingual labels for consumption by tabs, context menus, and profile modals.

---

## 9) FKs From Schema, Not Guesswork

* FK definition must rely on real DB foreign keys or explicit schema metadata (`source: "fk"`), not UI assumptions.
* Any `_id` field must be represented to the UI as a relationship object (e.g., `{ id, display_name }`) via backend normalization.
* The UI must never depend on incomplete or manually constructed FK display values.

---

## Example: “Perfect Schema” (Schema Metadata)

```json
{
  "name": "clinic_patients",
  "smart_features": {
    "settings": {
      "icon": "🤒",
      "colors": { "primary": "#ef4444" },
      "groups": [
        { "name": "basic", "labels": { "ar": "<ar_basic>", "en": "Basic" } },
        { "name": "contact", "labels": { "ar": "<ar_contact>", "en": "Contact" } }
      ]
    },
    "columns": [
      {
        "name": "patient_code",
        "source": "direct",
        "sort": 10,
        "labels": { "ar": "<ar_code>", "en": "Code" },
        "group": "basic"
      },
      {
        "name": "name",
        "source": "lang",
        "sort": 20,
        "labels": { "ar": "<ar_name>", "en": "Name" },
        "group": "basic"
      },
      {
        "name": "doctor",
        "source": "fk",
        "sort": 30,
        "labels": { "ar": "<ar_doctor>", "en": "Doctor" },
        "group": "basic",
        "component": "smart-select"
      }
    ]
  }
}
```

This constitution is the system’s highest law. Any frontend code that violates it must be rejected and rewritten.
