# Brocker - Social Real Estate Network
## Product Requirements Document (PRD) & Technical Specification

**Version:** 1.0  
**Date:** February 4, 2026  
**Status:** Draft  

---

# Part 1: Business Documentation

## 1. Executive Summary

**Brocker** is an innovative social real estate platform that combines traditional property marketplace functionality with modern social media features. The platform enables real estate professionals (Sellers) to showcase properties and build their personal brand through reels and posts, while Buyers can discover properties and connect with sellers through a controlled, admin-moderated contact system.

### Vision Statement
*"Revolutionizing real estate discovery through social engagement and trusted connections."*

### Mission
To create a secure, engaging platform where property transactions are enhanced by social interactions, professional networking, and verified communication channels.

---

## 2. System Overview

### 2.1 Platform Description
Brocker is a hybrid platform operating as:
- **Real Estate Marketplace**: Property listings, search, and discovery
- **Social Network**: Posts, reels, profiles, and engagement
- **Controlled Communication Hub**: Admin-moderated buyer-seller connections

### 2.2 Key Differentiators
| Feature | Traditional Platforms | Brocker |
|---------|----------------------|---------|
| Contact | Direct access | Admin-approved |
| Content | Listings only | Reels + Posts + Listings |
| Engagement | Transactional | Social + Professional |
| Trust | Reviews only | Verified connections |

### 2.3 Target Users
- **Sellers**: Real estate agents, property developers, individual property owners
- **Buyers**: Property seekers, investors, renters
- **Admins**: Platform moderators and managers

---

## 3. User Roles & Permissions

### 3.1 Role Matrix

| Feature | Admin | Seller | Buyer |
|---------|-------|--------|-------|
| Manage Platform Settings | ✅ | ❌ | ❌ |
| Approve Contact Requests | ✅ | ❌ | ❌ |
| Moderate Content | ✅ | ❌ | ❌ |
| Manage Advertisements | ✅ | ❌ | ❌ |
| View Analytics | ✅ | Limited | ❌ |
| Create Property Listings | ❌ | ✅ | ❌ |
| Create Reels | ❌ | ✅ | ✅ |
| Create Posts | ❌ | ✅ | ✅ |
| Browse Properties | ✅ | ✅ | ✅ |
| Send Contact Request | ❌ | ❌ | ✅ |
| Receive Contact Requests | ❌ | ✅ | ❌ |
| Chat (after approval) | ❌ | ✅ | ✅ |
| Promote Properties as Ads | ❌ | ✅ | ❌ |

### 3.2 Admin Role
**Responsibilities:**
- User management (sellers & buyers)
- Contact request approval/rejection
- Content moderation (posts, reels, chats)
- Advertisement approval and management
- Platform analytics and reporting
- System configuration

**Access Level:** Full system access

### 3.3 Seller Role
**Capabilities:**
- Create and manage professional profile
- Add, edit, delete property listings
- Create and publish reels (short videos)
- Create social posts (text, images, property updates)
- View content from other users
- Receive and manage contact requests
- Chat with approved buyers
- Promote properties as advertisements
- View personal analytics

**Restrictions:**
- Cannot initiate contact with buyers
- Cannot approve contact requests
- Cannot access admin functions

### 3.4 Buyer Role
**Capabilities:**
- Create and manage personal profile
- Browse all property listings
- View seller profiles, reels, and posts
- Create personal posts and reels
- Send contact requests to sellers
- Chat with sellers (after approval)
- Save/bookmark properties
- Search and filter properties

**Restrictions:**
- Cannot create property listings
- Cannot directly contact sellers (requires approval)
- Cannot promote advertisements

---

## 4. Feature List

### 4.1 Core Features

#### Authentication & Profiles
- User registration (email, phone, social login)
- Email/phone verification
- Profile creation and management
- Profile picture and cover photo
- Bio and contact information
- Professional credentials (for sellers)

#### Property Management
- Property listing creation
- Photo gallery (multiple images)
- Video tours
- Property details (price, location, size, type)
- Property status management (available, pending, sold)
- Property search and filtering
- Map-based property search
- Property bookmarking

#### Social Features
- **Reels**: 15-60 second vertical videos
- **Posts**: Text, images, property updates
- **Feed**: Chronological/algorithmic content display
- **Engagement**: Likes, comments, shares
- **Following**: Follow sellers/buyers
- **Notifications**: Real-time updates

#### Communication
- Contact request system
- Real-time chat (text + images)
- Voice calls (after approval)
- Chat history and archives

#### Advertising
- Property promotion
- Featured listings
- Banner advertisements
- Ad performance analytics

### 4.2 Dashboard Features

#### Seller Dashboard
```
┌─────────────────────────────────────────────┐
│           SELLER DASHBOARD                  │
├─────────────────────────────────────────────┤
│ ├── Properties                              │
│ │   ├── My Listings                         │
│ │   ├── Add New Property                    │
│ │   └── Property Analytics                  │
│ ├── Content                                 │
│ │   ├── My Reels                            │
│ │   ├── My Posts                            │
│ │   └── Create New                          │
│ ├── Contacts                                │
│ │   ├── Pending Requests                    │
│ │   ├── Approved Contacts                   │
│ │   └── Contact History                     │
│ ├── Advertising                             │
│ │   ├── Active Ads                          │
│ │   ├── Create Ad                           │
│ │   └── Ad Performance                      │
│ ├── Messages                                │
│ │   ├── Active Chats                        │
│ │   └── Archived Chats                      │
│ └── Analytics                               │
│     ├── Profile Views                       │
│     ├── Property Views                      │
│     └── Engagement Stats                    │
└─────────────────────────────────────────────┘
```

#### Admin Dashboard
```
┌─────────────────────────────────────────────┐
│           ADMIN DASHBOARD                   │
├─────────────────────────────────────────────┤
│ ├── Users                                   │
│ │   ├── Manage Sellers                      │
│ │   ├── Manage Buyers                       │
│ │   ├── User Reports                        │
│ │   └── Suspended Accounts                  │
│ ├── Contact Requests                        │
│ │   ├── Pending Approval                    │
│ │   ├── Approved                            │
│ │   └── Rejected                            │
│ ├── Content Moderation                      │
│ │   ├── Reported Posts                      │
│ │   ├── Reported Reels                      │
│ │   ├── Chat Monitoring                     │
│ │   └── Content Flags                       │
│ ├── Advertisements                          │
│ │   ├── Pending Approval                    │
│ │   ├── Active Ads                          │
│ │   ├── Ad Revenue                          │
│ │   └── Ad Settings                         │
│ ├── Properties                              │
│ │   ├── All Listings                        │
│ │   ├── Reported Listings                   │
│ │   └── Featured Properties                 │
│ └── Analytics                               │
│     ├── User Growth                         │
│     ├── Engagement Metrics                  │
│     ├── Revenue Reports                     │
│     └── Platform Health                     │
└─────────────────────────────────────────────┘
```

---

## 5. Seller Portfolio System (Professional Profile)

### 5.1 Overview

The **Seller Portfolio** is a comprehensive, multi-dimensional professional profile system that transforms the traditional seller profile into a powerful marketing and credibility tool. Unlike simple user profiles, the Portfolio acts as a complete business showcase, enabling sellers to present their expertise, track record, and services in a structured, professional manner.

### 5.2 Portfolio Architecture

The Portfolio follows a **modular architecture** inspired by enterprise ERP systems, organizing seller information into logical, interconnected modules:

```
┌─────────────────────────────────────────────────────────────────────┐
│                    SELLER PORTFOLIO MODULES                          │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌──────────────────────────────────────────────────────────┐      │
│  │ 1. IDENTITY MODULE                                        │      │
│  │    ├── Basic Information (Name, Contact, Location)       │      │
│  │    ├── Profile & Cover Photos                            │      │
│  │    ├── Bio & Professional Summary                        │      │
│  │    ├── Verification Status                               │      │
│  │    └── Social Links                                      │      │
│  └──────────────────────────────────────────────────────────┘      │
│                                                                      │
│  ┌──────────────────────────────────────────────────────────┐      │
│  │ 2. CREDENTIALS MODULE                                     │      │
│  │    ├── Licenses & Certifications                         │      │
│  │    ├── Awards & Recognition                              │      │
│  │    ├── Professional Memberships                          │      │
│  │    ├── Years of Experience                               │      │
│  │    └── Specializations                                   │      │
│  └──────────────────────────────────────────────────────────┘      │
│                                                                      │
│  ┌──────────────────────────────────────────────────────────┐      │
│  │ 3. SHOWCASE MODULE                                        │      │
│  │    ├── Featured Properties (Top 5-10 listings)           │      │
│  │    ├── Success Stories                                   │      │
│  │    ├── Before/After Projects                             │      │
│  │    ├── Featured Reels (Highlights)                       │      │
│  │    └── Portfolio Gallery                                 │      │
│  └──────────────────────────────────────────────────────────┘      │
│                                                                      │
│  ┌──────────────────────────────────────────────────────────┐      │
│  │ 4. SERVICES MODULE                                        │      │
│  │    ├── Service Types (Consultation, Valuation, etc.)     │      │
│  │    ├── Service Areas (Geographic coverage)               │      │
│  │    ├── Property Types Handled                            │      │
│  │    ├── Languages Spoken                                  │      │
│  │    └── Availability Schedule                             │      │
│  └──────────────────────────────────────────────────────────┘      │
│                                                                      │
│  ┌──────────────────────────────────────────────────────────┐      │
│  │ 5. PERFORMANCE MODULE                                     │      │
│  │    ├── Total Properties Sold/Rented                      │      │
│  │    ├── Average Deal Closure Time                         │      │
│  │    ├── Client Satisfaction Rating                        │      │
│  │    ├── Response Time Metrics                             │      │
│  │    └── Transaction Volume                                │      │
│  └──────────────────────────────────────────────────────────┘      │
│                                                                      │
│  ┌──────────────────────────────────────────────────────────┐      │
│  │ 6. SOCIAL MODULE                                          │      │
│  │    ├── Posts Feed                                         │      │
│  │    ├── Reels Collection                                  │      │
│  │    ├── Followers/Following Count                         │      │
│  │    ├── Engagement Metrics                                │      │
│  │    └── Content Categories                                │      │
│  └──────────────────────────────────────────────────────────┘      │
│                                                                      │
│  ┌──────────────────────────────────────────────────────────┐      │
│  │ 7. REVIEWS & TESTIMONIALS MODULE                          │      │
│  │    ├── Client Reviews                                     │      │
│  │    ├── Star Ratings (Overall & Category-specific)        │      │
│  │    ├── Verified Buyer Testimonials                       │      │
│  │    ├── Response to Reviews                               │      │
│  │    └── Review Analytics                                  │      │
│  └──────────────────────────────────────────────────────────┘      │
│                                                                      │
│  ┌──────────────────────────────────────────────────────────┐      │
│  │ 8. COMPANY MODULE (Optional - for agencies)               │      │
│  │    ├── Company Information                                │      │
│  │    ├── Team Members                                       │      │
│  │    ├── Office Locations                                   │      │
│  │    ├── Company History                                    │      │
│  │    └── Corporate Credentials                             │      │
│  └──────────────────────────────────────────────────────────┘      │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### 5.3 Portfolio Completeness System

The system tracks **Portfolio Completeness** to encourage sellers to build comprehensive profiles:

```
PORTFOLIO COMPLETENESS CALCULATION:
┌─────────────────────────────────────────────────────────────┐
│ Module                    │ Weight │ Status    │ Score      │
├─────────────────────────────────────────────────────────────┤
│ Identity (Required)       │  20%   │ Complete  │  20/20     │
│ Credentials               │  15%   │ Partial   │  10/15     │
│ Showcase                  │  20%   │ Complete  │  20/20     │
│ Services                  │  15%   │ Complete  │  15/15     │
│ Performance               │  10%   │ Auto      │  10/10     │
│ Social                    │  10%   │ Active    │  10/10     │
│ Reviews                   │  10%   │ Pending   │   5/10     │
│ Company (Optional)        │   -    │ N/A       │    -       │
├─────────────────────────────────────────────────────────────┤
│ TOTAL COMPLETENESS        │        │           │  90/100    │
└─────────────────────────────────────────────────────────────┘

Benefits of High Completeness:
✅ 80-100%: Premium badge, top search ranking
✅ 60-79%:  Verified badge, enhanced visibility
⚠️ 40-59%:  Standard profile, normal visibility
❌ 0-39%:   Limited visibility, profile warnings
```

### 5.4 Portfolio Features by Module

#### 5.4.1 Identity Module
| Field | Type | Required | Translatable |
|-------|------|----------|--------------|
| Full Name | Text | Yes | No |
| Professional Title | Text | Yes | Yes |
| Bio/Summary | Rich Text | Yes | Yes |
| Profile Photo | Image | Yes | No |
| Cover Photo | Image | No | No |
| Contact Email | Email | Yes | No |
| Contact Phone | Phone | Yes | No |
| Office Address | Address | No | Yes |
| Website URL | URL | No | No |
| Social Media Links | JSON | No | No |

#### 5.4.2 Credentials Module
| Field | Type | Required | Translatable |
|-------|------|----------|--------------|
| License Number | Text | Yes (Sellers) | No |
| License Issuer | Text | Yes | Yes |
| License Expiry | Date | Yes | No |
| Certifications | Array | No | Yes |
| Awards | Array | No | Yes |
| Years of Experience | Integer | Yes | No |
| Specializations | Tags | Yes | Yes |
| Education | Array | No | Yes |

#### 5.4.3 Showcase Module
| Field | Type | Required | Translatable |
|-------|------|----------|--------------|
| Featured Properties | References | No | N/A |
| Success Stories | Rich Text | No | Yes |
| Portfolio Images | Gallery | No | No |
| Featured Reels | References | No | N/A |
| Case Studies | Array | No | Yes |

#### 5.4.4 Services Module
| Field | Type | Required | Translatable |
|-------|------|----------|--------------|
| Service Types | Multi-select | Yes | Yes |
| Service Areas | Geographic | Yes | Yes |
| Property Types | Multi-select | Yes | Yes |
| Languages Spoken | Multi-select | Yes | No |
| Working Hours | Schedule | No | No |
| Consultation Fee | Decimal | No | No |

#### 5.4.5 Performance Module (Auto-calculated)
| Metric | Source | Display |
|--------|--------|---------|
| Total Listings | System | Public |
| Active Listings | System | Public |
| Sold Properties | System | Public |
| Average Response Time | System | Public |
| Deal Closure Rate | System | Private |
| Client Retention | System | Private |

### 5.5 Portfolio Visibility & Privacy

Sellers can control visibility of each module:

```
VISIBILITY SETTINGS:
├── Public: Visible to all users (buyers, guests)
├── Registered: Visible only to logged-in users
├── Verified: Visible only to verified buyers
├── Contacts: Visible only to approved contacts
└── Private: Visible only to seller and admins
```

### 5.6 Portfolio SEO & Discovery

Each portfolio is optimized for discovery:

- **Custom URL Slug**: `brocker.com/seller/[username]`
- **SEO Meta Tags**: Auto-generated from profile data
- **Rich Snippets**: Structured data for search engines
- **Social Sharing**: Open Graph tags for social media
- **QR Code**: Unique QR code for offline marketing

### 5.7 Portfolio Analytics

Sellers can track portfolio performance:

```
PORTFOLIO ANALYTICS DASHBOARD:
┌─────────────────────────────────────────────────────────────┐
│ Metric                    │ This Month │ Last Month │ Change │
├─────────────────────────────────────────────────────────────┤
│ Profile Views             │    1,247   │    892     │  +40%  │
│ Contact Requests          │      23    │     18     │  +28%  │
│ Property Views (Avg)      │     156    │    134     │  +16%  │
│ Follower Growth           │     +45    │    +32     │  +41%  │
│ Engagement Rate           │    4.2%    │   3.8%     │  +11%  │
│ Response Time (Avg)       │   2.3h     │   3.1h     │  -26%  │
└─────────────────────────────────────────────────────────────┘
```

### 5.8 Portfolio Badges & Achievements

The system awards badges based on portfolio quality and activity:

| Badge | Criteria | Benefits |
|-------|----------|----------|
| 🏆 **Top Performer** | Top 10% in sales | Featured in search |
| ⭐ **5-Star Seller** | 4.8+ rating, 50+ reviews | Trust badge |
| ✅ **Verified Pro** | License verified, 90%+ completeness | Premium features |
| 🔥 **Rising Star** | High engagement, new seller | Visibility boost |
| 💎 **Premium Member** | Paid subscription | Ad-free, analytics |
| 🎯 **Specialist** | 80%+ sales in one category | Category expert tag |
| 🚀 **Fast Responder** | <2h avg response time | Priority badge |
| 📸 **Content Creator** | 50+ posts/reels | Influencer status |

---

## 6. Business Rules

### 5.1 Contact Control Rules

```
RULE: CONTACT_REQUEST_FLOW
├── R1: Buyers CANNOT directly call sellers
├── R2: Buyers MUST send contact request first
├── R3: Admin MUST approve/reject within 24 hours
├── R4: Approved requests enable:
│   └── In-app chat
├── R5: Rejection requires reason
└── R6: Buyer can re-request after 7 days
```

### 5.2 Content Rules

```
RULE: CONTENT_PUBLISHING
├── R1: All reels limited to 60 seconds
├── R2: Posts limited to 2000 characters
├── R3: Maximum 10 images per post
├── R4: NSFW content auto-flagged
├── R5: report 
└── R6: Copyright violations = suspension
```

### 5.3 Property Listing Rules

```
RULE: PROPERTY_MANAGEMENT
├── R1: Minimum 3 photos required
├── R2: Price must be specified
├── R3: Location verification required
├── R4: Duplicate detection active
├── R5: Inactive listings archived after 90 days
└── R6: Sold properties removed after 30 days
```

### 5.4 Advertising Rules

```
RULE: ADVERTISING_SYSTEM
├── R1: Only verified sellers can advertise
├── R2: Ad content moderated before publish
├── R3: Minimum ad duration: 7 days
├── R4: Maximum 3 active ads per seller
├── R5: Ad pricing based on visibility tier
└── R6: Performance reports generated daily
```

---

## 6. Workflow Diagrams

### 6.1 Contact Request Flow

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│    BUYER     │     │    ADMIN     │     │    SELLER    │
└──────┬───────┘     └──────┬───────┘     └──────┬───────┘
       │                    │                    │
       │ 1. View Property   │                    │
       │────────────────────────────────────────>│
       │                    │                    │
       │ 2. Send Contact    │                    │
       │    Request         │                    │
       │───────────────────>│                    │
       │                    │                    │
       │                    │ 3. Review Request  │
       │                    │<───────────────────│
       │                    │                    │
       │                    │ 4. Approve/Reject  │
       │                    │───────────────────>│
       │                    │                    │
       │ 5. Notification    │                    │
       │<───────────────────│                    │
       │                    │                    │
       │ 6. If Approved:    │                    │
       │    Call/Chat       │                    │
       │────────────────────────────────────────>│
       │                    │                    │
```

### 6.2 Property Listing Flow

```
┌─────────────────────────────────────────────────────────────┐
│                   PROPERTY LISTING FLOW                      │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  [Seller Login] ──> [Dashboard] ──> [Add Property]          │
│         │                                                    │
│         v                                                    │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ Property Form                                         │   │
│  │ ├── Basic Info (Title, Description, Type)            │   │
│  │ ├── Location (Address, Map Pin, Area)                │   │
│  │ ├── Details (Price, Size, Bedrooms, Bathrooms)       │   │
│  │ ├── Amenities (Parking, Pool, Garden, etc.)          │   │
│  │ ├── Media (Photos, Videos, Virtual Tour)             │   │
│  │ └── Contact Preferences                               │   │
│  └──────────────────────────────────────────────────────┘   │
│         │                                                    │
│         v                                                    │
│  [Validation] ──> [Preview] ──> [Publish]                   │
│         │                                                    │
│         v                                                    │
│  [Property Live] ──> [Appears in Search/Feed]               │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### 6.3 Social Content Flow

```
┌─────────────────────────────────────────────────────────────┐
│                   SOCIAL CONTENT FLOW                        │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐      │
│  │   CREATE    │───>│   UPLOAD    │───>│   PUBLISH   │      │
│  │   CONTENT   │    │   MEDIA     │    │   TO FEED   │      │
│  └─────────────┘    └─────────────┘    └─────────────┘      │
│         │                                                    │
│         v                                                    │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ Content Types                                         │   │
│  │ ├── REEL: Record/Upload video (15-60s)               │   │
│  │ │   ├── Add music/audio                               │   │
│  │ │   ├── Add text overlays                             │   │
│  │ │   ├── Tag location/property                         │   │
│  │ │   └── Add hashtags                                  │   │
│  │ └── POST: Create text/image post                      │   │
│  │     ├── Write caption                                 │   │
│  │     ├── Attach images (max 10)                        │   │
│  │     ├── Tag property                                  │   │
│  │     └── Add hashtags                                  │   │
│  └──────────────────────────────────────────────────────┘   │
│         │                                                    │
│         v                                                    │
│  [Auto-Moderation Check] ──> [Publish] ──> [Feed/Reels Tab] │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ Engagement                                            │   │
│  │ ├── Users can like, comment, share                    │   │
│  │ ├── Content appears in followers' feeds               │   │
│  │ └── Trending content promoted to Explore              │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### 6.4 Advertisement Flow

```
┌─────────────────────────────────────────────────────────────┐
│                   ADVERTISEMENT FLOW                         │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  [Seller] ──> [Select Property] ──> [Create Ad Campaign]    │
│         │                                                    │
│         v                                                    │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ Ad Configuration                                      │   │
│  │ ├── Target Audience (Location, Demographics)         │   │
│  │ ├── Duration (7/14/30 days)                          │   │
│  │ ├── Placement (Feed/Reels/Search)                    │   │
│  │ ├── Budget                                           │   │
│  │ └── Creative Assets                                  │   │
│  └──────────────────────────────────────────────────────┘   │
│         │                                                    │
│         v                                                    │
│  [Submit for Review] ──> [Admin Reviews] ──> [Approve/Reject]│
│         │                                                    │
│         v                                                    │
│  [Payment Processing] ──> [Ad Goes Live] ──> [Analytics]    │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## 7. Chat System Architecture

### 7.1 Overview
The chat system enables real-time communication between approved buyer-seller pairs.

### 7.2 Features
- Real-time message delivery
- Text messages
- Image sharing (up to 10MB)
- Read receipts
- Typing indicators
- Message history (persistent)
- Push notifications

### 7.3 Chat Flow

```
┌─────────────────────────────────────────────────────────────┐
│                   CHAT SYSTEM FLOW                          │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  PRE-CONDITION: Contact request MUST be approved            │
│                                                              │
│  ┌────────────┐         ┌────────────┐         ┌──────────┐│
│  │   BUYER    │ <=====> │   SERVER   │ <=====> │  SELLER  ││
│  └────────────┘         └────────────┘         └──────────┘│
│                              │                              │
│                              v                              │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ Message Flow                                          │  │
│  │ 1. User composes message                              │  │
│  │ 2. Client encrypts message                            │  │
│  │ 3. Message sent via WebSocket                         │  │
│  │ 4. Server validates & stores                          │  │
│  │ 5. Message delivered to recipient                     │  │
│  │ 6. Read receipt sent back                             │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ Image Sharing Flow                                    │  │
│  │ 1. User selects image                                 │  │
│  │ 2. Image compressed & uploaded to CDN                 │  │
│  │ 3. CDN URL sent as message                            │  │
│  │ 4. Recipient receives & displays image                │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### 7.4 Chat States

```
CHAT_STATE_MACHINE:
├── INACTIVE: No approved contact request
├── PENDING: Request awaiting approval
├── ACTIVE: Chat enabled, messages flowing
├── BLOCKED: One party blocked the other
└── ARCHIVED: Chat moved to archive
```

---

# Part 2: Functional Requirements

## 8. Functional Requirements

### 8.1 Authentication Module (FR-AUTH)

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-AUTH-01 | System shall allow user registration with email/phone | High |
| FR-AUTH-02 | System shall verify email/phone via OTP | High |
| FR-AUTH-03 | System shall support social login (Google, Apple, Facebook) | Medium |
| FR-AUTH-04 | System shall enforce password complexity rules | High |
| FR-AUTH-05 | System shall provide password reset functionality | High |
| FR-AUTH-06 | System shall implement session management with JWT | High |
| FR-AUTH-07 | System shall support multi-device login | Medium |
| FR-AUTH-08 | System shall log all authentication attempts | High |

### 8.2 Profile Management (FR-PROF)

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-PROF-01 | Users shall create and edit their profile | High |
| FR-PROF-02 | Sellers shall add professional credentials | High |
| FR-PROF-03 | System shall validate profile completeness | Medium |
| FR-PROF-04 | Users shall upload profile and cover photos | High |
| FR-PROF-05 | System shall display verification badges | Medium |
| FR-PROF-06 | Users shall set privacy preferences | Medium |

### 8.3 Property Management (FR-PROP)

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-PROP-01 | Sellers shall create property listings | High |
| FR-PROP-02 | System shall require minimum 3 photos per listing | High |
| FR-PROP-03 | Sellers shall specify property details (price, size, type) | High |
| FR-PROP-04 | System shall support location with map integration | High |
| FR-PROP-05 | Sellers shall update property status | High |
| FR-PROP-06 | System shall archive inactive listings after 90 days | Medium |
| FR-PROP-07 | Buyers shall bookmark properties | High |
| FR-PROP-08 | System shall provide advanced search filters | High |
| FR-PROP-09 | System shall detect duplicate listings | Medium |
| FR-PROP-10 | System shall support virtual tour videos | Low |

### 8.4 Social Features (FR-SOC)

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-SOC-01 | Users shall create posts with text/images | High |
| FR-SOC-02 | Users shall create reels (15-60 seconds) | High |
| FR-SOC-03 | System shall display content feed | High |
| FR-SOC-04 | Users shall like, comment, share content | High |
| FR-SOC-05 | Users shall follow other users | High |
| FR-SOC-06 | System shall send notifications | High |
| FR-SOC-07 | Users shall tag properties in posts | Medium |
| FR-SOC-08 | System shall support hashtags | Medium |
| FR-SOC-09 | System shall provide Explore/Discover section | Medium |

### 8.5 Contact System (FR-CONT)

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-CONT-01 | Buyers shall send contact requests to sellers | High |
| FR-CONT-02 | Admin shall approve/reject contact requests | High |
| FR-CONT-03 | System shall notify all parties of request status | High |
| FR-CONT-04 | Approved contacts shall enable chat | High |
| FR-CONT-05 | Approved contacts shall enable voice calls | High |
| FR-CONT-06 | System shall block re-requests for 7 days after rejection | Medium |
| FR-CONT-07 | Users shall block/unblock contacts | Medium |

### 8.6 Chat System (FR-CHAT)

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-CHAT-01 | System shall provide real-time messaging | High |
| FR-CHAT-02 | Users shall send text messages | High |
| FR-CHAT-03 | Users shall share images in chat | High |
| FR-CHAT-04 | System shall show read receipts | Medium |
| FR-CHAT-05 | System shall show typing indicators | Low |
| FR-CHAT-06 | System shall persist chat history | High |
| FR-CHAT-07 | Users shall archive chats | Medium |
| FR-CHAT-08 | System shall send push notifications for new messages | High |

### 8.7 Advertising System (FR-ADS)

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-ADS-01 | Sellers shall create ad campaigns for properties | High |
| FR-ADS-02 | Admin shall approve/reject advertisements | High |
| FR-ADS-03 | System shall display ads in feed, reels, search | High |
| FR-ADS-04 | System shall track ad impressions and clicks | High |
| FR-ADS-05 | Sellers shall view ad performance analytics | High |
| FR-ADS-06 | System shall process ad payments | High |
| FR-ADS-07 | System shall limit active ads per seller (max 3) | Medium |

### 8.8 Admin Functions (FR-ADMIN)

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-ADMIN-01 | Admin shall manage all users (view, edit, suspend) | High |
| FR-ADMIN-02 | Admin shall moderate content (posts, reels) | High |
| FR-ADMIN-03 | Admin shall monitor chat conversations | High |
| FR-ADMIN-04 | Admin shall view platform analytics | High |
| FR-ADMIN-05 | Admin shall configure system settings | High |
| FR-ADMIN-06 | Admin shall manage reported content | High |
| FR-ADMIN-07 | Admin shall generate reports | Medium |

---

## 9. Non-Functional Requirements

### 9.1 Performance (NFR-PERF)

| ID | Requirement | Target |
|----|-------------|--------|
| NFR-PERF-01 | Page load time | < 3 seconds |
| NFR-PERF-02 | API response time | < 500ms (95th percentile) |
| NFR-PERF-03 | Chat message delivery | < 200ms |
| NFR-PERF-04 | Image upload time | < 5 seconds (5MB) |
| NFR-PERF-05 | Video processing time | < 60 seconds |
| NFR-PERF-06 | Search results | < 1 second |
| NFR-PERF-07 | Concurrent users | 10,000+ |

### 9.2 Scalability (NFR-SCALE)

| ID | Requirement | Target |
|----|-------------|--------|
| NFR-SCALE-01 | Horizontal scaling | Auto-scale based on load |
| NFR-SCALE-02 | Database scaling | Read replicas support |
| NFR-SCALE-03 | CDN for media | Global distribution |
| NFR-SCALE-04 | Microservices architecture | Independent scaling |

### 9.3 Reliability (NFR-REL)

| ID | Requirement | Target |
|----|-------------|--------|
| NFR-REL-01 | System uptime | 99.9% |
| NFR-REL-02 | Data backup frequency | Every 6 hours |
| NFR-REL-03 | Disaster recovery | < 4 hours RTO |
| NFR-REL-04 | Zero data loss | RPO < 1 hour |

### 9.4 Security (NFR-SEC)

| ID | Requirement | Target |
|----|-------------|--------|
| NFR-SEC-01 | Data encryption at rest | AES-256 |
| NFR-SEC-02 | Data encryption in transit | TLS 1.3 |
| NFR-SEC-03 | Chat encryption | End-to-end optional |
| NFR-SEC-04 | Password hashing | bcrypt/Argon2 |
| NFR-SEC-05 | Rate limiting | Implemented |
| NFR-SEC-06 | OWASP compliance | Top 10 addressed |

### 9.5 Compatibility (NFR-COMP)

| ID | Requirement | Target |
|----|-------------|--------|
| NFR-COMP-01 | Mobile browsers | iOS Safari, Chrome Android |
| NFR-COMP-02 | Desktop browsers | Chrome, Firefox, Safari, Edge |
| NFR-COMP-03 | Mobile apps | iOS 14+, Android 8+ |
| NFR-COMP-04 | Screen sizes | Responsive design |

---

# Part 3: Technical Specification

## 10. System Architecture

### 10.1 High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                         CLIENT LAYER                                │
├─────────────────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────────┐  │
│  │  Mobile App  │  │   Web App    │  │    Admin Dashboard       │  │
│  │  (iOS/Android)│  │   (React)    │  │    (React Admin)         │  │
│  └──────────────┘  └──────────────┘  └──────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────────┐
│                         API GATEWAY                                  │
├─────────────────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────────┐  │
│  │ Load Balancer│  │  Rate Limiter│  │    Authentication        │  │
│  └──────────────┘  └──────────────┘  └──────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────────┐
│                       SERVICE LAYER                                  │
├─────────────────────────────────────────────────────────────────────┤
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐       │
│  │  Auth   │ │  User   │ │Property │ │  Social │ │  Chat   │       │
│  │ Service │ │ Service │ │ Service │ │ Service │ │ Service │       │
│  └─────────┘ └─────────┘ └─────────┘ └─────────┘ └─────────┘       │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐       │
│  │ Contact │ │   Ads   │ │  Media  │ │ Notify  │ │  Admin  │       │
│  │ Service │ │ Service │ │ Service │ │ Service │ │ Service │       │
│  └─────────┘ └─────────┘ └─────────┘ └─────────┘ └─────────┘       │
└─────────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────────┐
│                        DATA LAYER                                    │
├─────────────────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────────┐  │
│  │  PostgreSQL  │  │    Redis     │  │    Elasticsearch         │  │
│  │  (Primary DB)│  │   (Cache)    │  │    (Search Engine)       │  │
│  └──────────────┘  └──────────────┘  └──────────────────────────┘  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────────┐  │
│  │   MongoDB    │  │     S3       │  │    Message Queue         │  │
│  │   (Chat DB)  │  │    (CDN)     │  │    (RabbitMQ/Kafka)      │  │
│  └──────────────┘  └──────────────┘  └──────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────┘
```

### 10.2 Technology Stack

| Layer | Technology |
|-------|------------|
| Mobile | React Native / Flutter |
| Web Frontend | React.js + TypeScript |
| Admin Panel | React Admin |
| API Gateway | Kong / AWS API Gateway |
| Backend | Node.js (NestJS) / Python (FastAPI) |
| Real-time | Socket.IO / WebSocket |
| Primary DB | PostgreSQL |
| Chat DB | MongoDB |
| Cache | Redis |
| Search | Elasticsearch |
| File Storage | AWS S3 / CloudFlare R2 |
| CDN | CloudFlare / AWS CloudFront |
| Message Queue | RabbitMQ / Apache Kafka |
| Push Notifications | Firebase Cloud Messaging |
| Video Processing | FFmpeg / AWS MediaConvert |

---

## 10. Vertical Language Architecture

### 10.1 Overview

Brocker implements a **Vertical Language System** for multi-language support, separating translatable content from core data. This architecture enables:

- **Clean separation** of business logic and translations
- **Dynamic language switching** without data duplication
- **Scalable translation management** for unlimited languages
- **Efficient storage** and query performance
- **Easy content localization** for global markets

### 10.2 Vertical vs. Horizontal Translation Models

#### Traditional Horizontal Model (NOT USED)
```sql
-- ❌ Horizontal: Multiple columns per language
CREATE TABLE properties (
    id UUID,
    title_en VARCHAR(255),
    title_ar VARCHAR(255),
    title_fr VARCHAR(255),
    description_en TEXT,
    description_ar TEXT,
    description_fr TEXT,
    ...
);
-- Problems: Schema changes for new languages, data bloat, complex queries
```

#### Vertical Model (BROCKER APPROACH)
```sql
-- ✅ Vertical: Base table + Translation table
CREATE TABLE properties (
    id UUID,
    price DECIMAL,
    size_sqm DECIMAL,
    bedrooms INTEGER,
    -- Only non-translatable data
);

CREATE TABLE properties_lang (
    id UUID,
    properties_id UUID REFERENCES properties(id),
    lang VARCHAR(10),  -- 'en', 'ar', 'fr', etc.
    title VARCHAR(255),
    description TEXT,
    -- Only translatable text fields
);
-- Benefits: Easy to add languages, clean schema, efficient queries
```

### 10.3 Translation System Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                   TRANSLATION SYSTEM FLOW                            │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌────────────────────────────────────────────────────────┐         │
│  │ 1. CLIENT REQUEST                                       │         │
│  │    GET /api/v1/properties?lang=ar                      │         │
│  └──────────────────────────┬─────────────────────────────┘         │
│                             │                                        │
│                             ▼                                        │
│  ┌────────────────────────────────────────────────────────┐         │
│  │ 2. API GATEWAY                                          │         │
│  │    - Extract lang parameter                            │         │
│  │    - Set fallback language (default: 'en')             │         │
│  └──────────────────────────┬─────────────────────────────┘         │
│                             │                                        │
│                             ▼                                        │
│  ┌────────────────────────────────────────────────────────┐         │
│  │ 3. SERVICE LAYER (Property Service)                     │         │
│  │    - Query base table                                  │         │
│  │    - Detect translatable fields                        │         │
│  │    - Call Translation Hydrator                         │         │
│  └──────────────────────────┬─────────────────────────────┘         │
│                             │                                        │
│                             ▼                                        │
│  ┌────────────────────────────────────────────────────────┐         │
│  │ 4. TRANSLATION HYDRATOR                                 │         │
│  │    LEFT JOIN properties_lang                           │         │
│  │    WHERE lang = 'ar' OR lang = 'en' (fallback)         │         │
│  │    - Merge translations into base records              │         │
│  │    - Apply fallback logic                              │         │
│  └──────────────────────────┬─────────────────────────────┘         │
│                             │                                        │
│                             ▼                                        │
│  ┌────────────────────────────────────────────────────────┐         │
│  │ 5. FLATTENED RESPONSE                                   │         │
│  │    {                                                   │         │
│  │      "id": "uuid",                                     │         │
│  │      "price": 500000,                                  │         │
│  │      "title": "شقة فاخرة",  // Arabic                  │         │
│  │      "description": "...",  // Arabic                  │         │
│  │      "i18n": {                                         │         │
│  │        "available_langs": ["ar", "en"],                │         │
│  │        "current_lang": "ar"                            │         │
│  │      }                                                 │         │
│  │    }                                                   │         │
│  └────────────────────────────────────────────────────────┘         │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### 10.4 Flattening Mechanism

The **Flattening Mechanism** merges translation data into base records at the API layer:

#### Backend Process (Node.js/Python)
```javascript
// Pseudo-code for translation flattening
async function getPropertiesWithTranslation(filters, lang = 'ar', fallbackLang = 'en') {
  // Step 1: Query base table
  const baseRecords = await db.query(`
    SELECT * FROM properties WHERE status = 'active'
  `);

  // Step 2: Query translation table
  const translations = await db.query(`
    SELECT * FROM properties_lang 
    WHERE properties_id IN (?) AND lang IN (?, ?)
  `, [baseRecords.map(r => r.id), lang, fallbackLang]);

  // Step 3: Build translation map
  const translationMap = {};
  translations.forEach(t => {
    if (!translationMap[t.properties_id]) {
      translationMap[t.properties_id] = {};
    }
    translationMap[t.properties_id][t.lang] = {
      title: t.title,
      description: t.description,
      ...
    };
  });

  // Step 4: Flatten (merge) translations into base records
  const flattenedRecords = baseRecords.map(record => {
    const trans = translationMap[record.id];
    const currentLang = trans?.[lang] || trans?.[fallbackLang] || {};
    
    return {
      ...record,
      title: currentLang.title || '[No Translation]',
      description: currentLang.description || '[No Translation]',
      i18n: {
        available_langs: Object.keys(trans || {}),
        current_lang: trans?.[lang] ? lang : fallbackLang
      }
    };
  });

  return flattenedRecords;
}
```

### 10.5 Translation Table Naming Convention

All translation tables follow strict naming conventions:

| Base Table | Translation Table | Pattern |
|------------|-------------------|---------|
| `properties` | `properties_lang` | `{table}_lang` |
| `seller_profiles` | `seller_profiles_lang` | `{table}_lang` |
| `posts` | `posts_lang` | `{table}_lang` |
| `categories` | `categories_lang` | `{table}_lang` |
| `amenities` | `amenities_lang` | `{table}_lang` |
| `ui_labels` | `ui_labels_lang` | `{table}_lang` |

### 10.6 Translation Table Structure

Every `_lang` table must include:

```sql
CREATE TABLE {table}_lang (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    {table}_id          UUID REFERENCES {table}(id) ON DELETE CASCADE,
    lang                VARCHAR(10) NOT NULL,  -- ISO 639-1 code
    
    -- Translatable fields (text only)
    title               VARCHAR(255),
    description         TEXT,
    -- ... other text fields
    
    created_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    UNIQUE({table}_id, lang)  -- One translation per language per record
);

CREATE INDEX idx_{table}_lang_table_id ON {table}_lang({table}_id);
CREATE INDEX idx_{table}_lang_lang ON {table}_lang(lang);
```

### 10.7 Supported Languages

Brocker supports multiple languages with RTL/LTR directionality:

```sql
CREATE TABLE languages (
    id              UUID PRIMARY KEY,
    code            VARCHAR(10) UNIQUE NOT NULL,  -- 'en', 'ar', 'fr'
    name            VARCHAR(50) NOT NULL,         -- 'English', 'العربية'
    direction       VARCHAR(3) NOT NULL,          -- 'ltr', 'rtl'
    is_default      BOOLEAN DEFAULT FALSE,
    is_active       BOOLEAN DEFAULT TRUE,
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Initial languages
INSERT INTO languages (code, name, direction, is_default) VALUES
('ar', 'العربية', 'rtl', TRUE),
('en', 'English', 'ltr', FALSE),
('fr', 'Français', 'ltr', FALSE);
```

### 10.8 UI Labels Translation

System UI labels (buttons, menus, messages) use a dedicated translation system:

```sql
-- UI Labels base table
CREATE TABLE ui_labels (
    id              UUID PRIMARY KEY,
    code            VARCHAR(100) UNIQUE NOT NULL,  -- 'home.hero.title'
    category        VARCHAR(50),                    -- 'home', 'property', 'auth'
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- UI Labels translations
CREATE TABLE ui_labels_lang (
    id              UUID PRIMARY KEY,
    ui_labels_id    UUID REFERENCES ui_labels(id) ON DELETE CASCADE,
    lang            VARCHAR(10) NOT NULL,
    text            VARCHAR(500) NOT NULL,
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    UNIQUE(ui_labels_id, lang)
);

-- Example UI labels
INSERT INTO ui_labels (code, category) VALUES
('nav.home', 'navigation'),
('nav.properties', 'navigation'),
('property.details.bedrooms', 'property'),
('auth.login.submit', 'auth');

INSERT INTO ui_labels_lang (ui_labels_id, lang, text) VALUES
((SELECT id FROM ui_labels WHERE code='nav.home'), 'ar', 'الرئيسية'),
((SELECT id FROM ui_labels WHERE code='nav.home'), 'en', 'Home'),
((SELECT id FROM ui_labels WHERE code='property.details.bedrooms'), 'ar', 'غرف النوم'),
((SELECT id FROM ui_labels WHERE code='property.details.bedrooms'), 'en', 'Bedrooms');
```

### 10.9 Frontend Translation Integration

#### Language Switching
```javascript
// Frontend: Language toggle
function setLanguage(lang) {
  // 1. Update localStorage
  localStorage.setItem('preferred_lang', lang);
  
  // 2. Update document direction
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  
  // 3. Reload data with new language
  reloadDataWithLanguage(lang);
}

// Reload all data with new language parameter
async function reloadDataWithLanguage(lang) {
  showLoadingIndicator();
  
  // Reconnect WebSocket/API with lang parameter
  await bootstrapRealtime({ lang });
  
  // Reload UI labels
  await loadUILabels(lang);
  
  hideLoadingIndicator();
}
```

#### Translation Helper Function
```javascript
// Frontend: Translation helper
function translate(key, lang = getCurrentLang()) {
  const translations = window.i18n || {};
  return translations[key]?.[lang] || key;
}

// Usage
const title = translate('property.details.title');  // "عنوان العقار" or "Property Title"
```

### 10.10 CRUD Operations with Translations

#### Creating a Record with Translations
```javascript
// API Request: POST /api/v1/properties
{
  "record": {
    "price": 500000,
    "size_sqm": 120,
    "bedrooms": 3,
    "bathrooms": 2
  },
  "translations": {
    "ar": {
      "title": "شقة فاخرة في التجمع الخامس",
      "description": "شقة مميزة بإطلالة رائعة"
    },
    "en": {
      "title": "Luxury Apartment in Fifth Settlement",
      "description": "Premium apartment with amazing view"
    }
  }
}

// Backend: Insert base record + translations
async function createPropertyWithTranslations(data) {
  const { record, translations } = data;
  
  // Insert base record
  const property = await db.insert('properties', record);
  
  // Insert translations
  for (const [lang, fields] of Object.entries(translations)) {
    await db.insert('properties_lang', {
      properties_id: property.id,
      lang,
      ...fields
    });
  }
  
  return property;
}
```

#### Updating Translations
```javascript
// API Request: PUT /api/v1/properties/:id/translations
{
  "lang": "fr",
  "title": "Appartement de luxe",
  "description": "Appartement premium avec vue magnifique"
}

// Backend: Upsert translation
async function updateTranslation(propertyId, lang, fields) {
  await db.upsert('properties_lang', {
    properties_id: propertyId,
    lang,
    ...fields
  }, ['properties_id', 'lang']);
}
```

### 10.11 Translation Best Practices

#### DO's ✅
- Always provide at least 2 languages (default + English)
- Use fallback language when translation is missing
- Store only text fields in `_lang` tables
- Use consistent language codes (ISO 639-1)
- Index `{table}_id` and `lang` columns
- Validate language code against `languages` table

#### DON'Ts ❌
- Don't store non-text data in `_lang` tables
- Don't duplicate data across base and `_lang` tables
- Don't hard-code language-specific text in code
- Don't forget CASCADE DELETE on foreign keys
- Don't query `_lang` tables directly (use hydration)

### 10.12 Translation Performance Optimization

```sql
-- Materialized view for frequently accessed translations
CREATE MATERIALIZED VIEW properties_with_translations AS
SELECT 
    p.*,
    pl_ar.title as title_ar,
    pl_ar.description as description_ar,
    pl_en.title as title_en,
    pl_en.description as description_en
FROM properties p
LEFT JOIN properties_lang pl_ar ON p.id = pl_ar.properties_id AND pl_ar.lang = 'ar'
LEFT JOIN properties_lang pl_en ON p.id = pl_en.properties_id AND pl_en.lang = 'en'
WHERE p.status = 'active';

-- Refresh periodically
REFRESH MATERIALIZED VIEW properties_with_translations;
```

### 10.13 Translation Coverage Tracking

```sql
-- View to track translation completeness
CREATE VIEW translation_coverage AS
SELECT 
    t.table_name,
    l.code as lang,
    COUNT(DISTINCT base.id) as total_records,
    COUNT(DISTINCT trans.id) as translated_records,
    ROUND(COUNT(DISTINCT trans.id)::NUMERIC / COUNT(DISTINCT base.id) * 100, 2) as coverage_percent
FROM information_schema.tables t
CROSS JOIN languages l
LEFT JOIN LATERAL (
    SELECT id FROM t.table_name
) base ON true
LEFT JOIN LATERAL (
    SELECT id FROM t.table_name || '_lang' 
    WHERE lang = l.code AND table_id = base.id
) trans ON true
WHERE t.table_name NOT LIKE '%_lang'
GROUP BY t.table_name, l.code;
```

---

## 11. Database Schema

### 11.1 Entity Relationship Diagram (Text)

```
┌─────────────────────────────────────────────────────────────────────┐
│                      DATABASE RELATIONSHIPS                          │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  users ─────────────< properties (1:N)                              │
│    │                                                                 │
│    ├─────────────────< posts (1:N)                                  │
│    │                                                                 │
│    ├─────────────────< reels (1:N)                                  │
│    │                                                                 │
│    ├─────────────────< contact_requests (1:N as buyer)              │
│    │                                                                 │
│    ├─────────────────< contact_requests (1:N as seller)             │
│    │                                                                 │
│    ├─────────────────< messages (1:N as sender)                     │
│    │                                                                 │
│    ├─────────────────< advertisements (1:N)                         │
│    │                                                                 │
│    └─────────────────< follows (N:M self-referential)               │
│                                                                      │
│  properties ─────────< property_images (1:N)                        │
│       │                                                              │
│       ├──────────────< property_bookmarks (1:N)                     │
│       │                                                              │
│       └──────────────< advertisements (1:N)                         │
│                                                                      │
│  posts ──────────────< comments (1:N)                               │
│    │                                                                 │
│    └─────────────────< likes (1:N)                                  │
│                                                                      │
│  reels ──────────────< comments (1:N)                               │
│    │                                                                 │
│    └─────────────────< likes (1:N)                                  │
│                                                                      │
│  conversations ──────< messages (1:N)                               │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### 11.2 Table Definitions

#### Users Table
```sql
CREATE TABLE users (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email               VARCHAR(255) UNIQUE NOT NULL,
    phone               VARCHAR(20) UNIQUE,
    password_hash       VARCHAR(255) NOT NULL,
    role                ENUM('admin', 'seller', 'buyer') NOT NULL,
    first_name          VARCHAR(100) NOT NULL,
    last_name           VARCHAR(100) NOT NULL,
    profile_photo_url   VARCHAR(500),
    cover_photo_url     VARCHAR(500),
    bio                 TEXT,
    is_verified         BOOLEAN DEFAULT FALSE,
    is_active           BOOLEAN DEFAULT TRUE,
    email_verified_at   TIMESTAMP,
    phone_verified_at   TIMESTAMP,
    last_login_at       TIMESTAMP,
    created_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_users_role ON users(role);
CREATE INDEX idx_users_email ON users(email);
```

#### Seller Profiles Table (Base)
```sql
CREATE TABLE seller_profiles (
    id                      UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id                 UUID UNIQUE REFERENCES users(id) ON DELETE CASCADE,
    
    -- Identity (Non-translatable)
    license_number          VARCHAR(100) UNIQUE,
    license_expiry          DATE,
    years_experience        INTEGER DEFAULT 0,
    profile_completeness    INTEGER DEFAULT 0,  -- 0-100%
    
    -- Contact
    office_phone            VARCHAR(20),
    office_email            VARCHAR(255),
    website_url             VARCHAR(500),
    
    -- Location (Non-translatable coordinates)
    office_latitude         DECIMAL(10,8),
    office_longitude        DECIMAL(11,8),
    
    -- Status & Verification
    is_verified             BOOLEAN DEFAULT FALSE,
    is_premium              BOOLEAN DEFAULT FALSE,
    verification_date       TIMESTAMP,
    
    -- Performance Metrics (Auto-calculated)
    total_listings          INTEGER DEFAULT 0,
    active_listings         INTEGER DEFAULT 0,
    sold_properties         INTEGER DEFAULT 0,
    rating                  DECIMAL(2,1) DEFAULT 0,
    total_reviews           INTEGER DEFAULT 0,
    avg_response_time_hours DECIMAL(5,2),
    
    -- Social Stats
    followers_count         INTEGER DEFAULT 0,
    following_count         INTEGER DEFAULT 0,
    posts_count             INTEGER DEFAULT 0,
    reels_count             INTEGER DEFAULT 0,
    
    -- Settings (JSONB for flexibility)
    service_types           JSONB,  -- ['consultation', 'valuation', 'property_management']
    property_types          JSONB,  -- ['apartment', 'villa', 'commercial']
    languages_spoken        JSONB,  -- ['ar', 'en', 'fr']
    working_hours           JSONB,  -- {mon: {start: '09:00', end: '17:00'}, ...}
    social_links            JSONB,  -- {facebook: '...', instagram: '...'}
    visibility_settings     JSONB,  -- {showcase: 'public', credentials: 'verified'}
    
    -- Timestamps
    created_at              TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at              TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_seller_profiles_user ON seller_profiles(user_id);
CREATE INDEX idx_seller_profiles_verified ON seller_profiles(is_verified);
CREATE INDEX idx_seller_profiles_premium ON seller_profiles(is_premium);
CREATE INDEX idx_seller_profiles_rating ON seller_profiles(rating DESC);
CREATE INDEX idx_seller_profiles_completeness ON seller_profiles(profile_completeness DESC);
```

#### Seller Profiles Translation Table
```sql
CREATE TABLE seller_profiles_lang (
    id                      UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    seller_profiles_id      UUID REFERENCES seller_profiles(id) ON DELETE CASCADE,
    lang                    VARCHAR(10) NOT NULL,
    
    -- Translatable Identity Fields
    professional_title      VARCHAR(255),  -- "Real Estate Consultant"
    bio                     TEXT,
    company_name            VARCHAR(255),
    
    -- Translatable Location
    office_address          VARCHAR(500),
    office_city             VARCHAR(100),
    office_area             VARCHAR(100),
    
    -- Translatable Credentials
    license_issuer          VARCHAR(255),
    specializations         TEXT[],  -- Array of specialization tags
    certifications          JSONB,   -- [{name: '...', issuer: '...', year: 2020}]
    awards                  JSONB,   -- [{title: '...', year: 2021, description: '...'}]
    education               JSONB,   -- [{degree: '...', institution: '...', year: 2015}]
    
    -- Translatable Showcase
    tagline                 VARCHAR(255),  -- "Your Trusted Property Partner"
    success_stories         JSONB,  -- [{title: '...', description: '...', year: 2022}]
    
    -- Translatable Services
    service_areas           TEXT[],  -- Geographic areas served
    
    -- Metadata
    created_at              TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at              TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    UNIQUE(seller_profiles_id, lang)
);

CREATE INDEX idx_seller_profiles_lang_profile ON seller_profiles_lang(seller_profiles_id);
CREATE INDEX idx_seller_profiles_lang_lang ON seller_profiles_lang(lang);
```

#### Seller Credentials Table (Optional - for detailed tracking)
```sql
CREATE TABLE seller_credentials (
    id                      UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    seller_profile_id       UUID REFERENCES seller_profiles(id) ON DELETE CASCADE,
    type                    VARCHAR(50) NOT NULL,  -- 'license', 'certification', 'award'
    credential_number       VARCHAR(100),
    issue_date              DATE,
    expiry_date             DATE,
    issuer_name             VARCHAR(255),
    document_url            VARCHAR(500),
    is_verified             BOOLEAN DEFAULT FALSE,
    created_at              TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_seller_credentials_profile ON seller_credentials(seller_profile_id);
CREATE INDEX idx_seller_credentials_type ON seller_credentials(type);
```

#### Seller Credentials Translation Table
```sql
CREATE TABLE seller_credentials_lang (
    id                      UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    seller_credentials_id   UUID REFERENCES seller_credentials(id) ON DELETE CASCADE,
    lang                    VARCHAR(10) NOT NULL,
    
    title                   VARCHAR(255),
    description             TEXT,
    issuer_name             VARCHAR(255),
    
    created_at              TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    UNIQUE(seller_credentials_id, lang)
);

CREATE INDEX idx_seller_credentials_lang_cred ON seller_credentials_lang(seller_credentials_id);
```

#### Seller Reviews Table
```sql
CREATE TABLE seller_reviews (
    id                      UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    seller_profile_id       UUID REFERENCES seller_profiles(id) ON DELETE CASCADE,
    buyer_id                UUID REFERENCES users(id) ON DELETE SET NULL,
    property_id             UUID REFERENCES properties(id) ON DELETE SET NULL,
    
    -- Ratings (1-5 stars)
    overall_rating          INTEGER NOT NULL CHECK (overall_rating BETWEEN 1 AND 5),
    professionalism_rating  INTEGER CHECK (professionalism_rating BETWEEN 1 AND 5),
    responsiveness_rating   INTEGER CHECK (responsiveness_rating BETWEEN 1 AND 5),
    knowledge_rating        INTEGER CHECK (knowledge_rating BETWEEN 1 AND 5),
    
    -- Status
    is_verified             BOOLEAN DEFAULT FALSE,  -- Verified purchase
    is_visible              BOOLEAN DEFAULT TRUE,
    is_featured             BOOLEAN DEFAULT FALSE,
    
    -- Metadata
    created_at              TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at              TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_seller_reviews_seller ON seller_reviews(seller_profile_id);
CREATE INDEX idx_seller_reviews_buyer ON seller_reviews(buyer_id);
CREATE INDEX idx_seller_reviews_rating ON seller_reviews(overall_rating DESC);
CREATE INDEX idx_seller_reviews_created ON seller_reviews(created_at DESC);
```

#### Seller Reviews Translation Table
```sql
CREATE TABLE seller_reviews_lang (
    id                      UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    seller_reviews_id       UUID REFERENCES seller_reviews(id) ON DELETE CASCADE,
    lang                    VARCHAR(10) NOT NULL,
    
    review_text             TEXT,
    seller_response         TEXT,
    
    created_at              TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at              TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    UNIQUE(seller_reviews_id, lang)
);

CREATE INDEX idx_seller_reviews_lang_review ON seller_reviews_lang(seller_reviews_id);
```

#### Properties Table (Base)
```sql
CREATE TABLE properties (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    seller_id           UUID REFERENCES users(id) ON DELETE CASCADE,
    
    -- Property Type & Listing
    property_type       VARCHAR(50) NOT NULL,  -- 'apartment', 'house', 'villa', etc.
    listing_type        VARCHAR(20) NOT NULL,  -- 'sale', 'rent'
    
    -- Pricing (Non-translatable)
    price               DECIMAL(15,2) NOT NULL,
    currency            VARCHAR(3) DEFAULT 'USD',
    price_per_sqm       DECIMAL(10,2),
    
    -- Specifications (Non-translatable)
    size_sqm            DECIMAL(10,2),
    bedrooms            INTEGER,
    bathrooms           INTEGER,
    floors              INTEGER,
    parking_spaces      INTEGER,
    year_built          INTEGER,
    
    -- Location (Non-translatable coordinates)
    latitude            DECIMAL(10,8),
    longitude           DECIMAL(11,8),
    postal_code         VARCHAR(20),
    
    -- Features (Non-translatable IDs, translated via lookup)
    amenities           UUID[],  -- References to amenities table
    
    -- Status & Visibility
    status              VARCHAR(20) DEFAULT 'active',  -- 'active', 'pending', 'sold', 'rented', 'archived'
    is_featured         BOOLEAN DEFAULT FALSE,
    is_verified         BOOLEAN DEFAULT FALSE,
    
    -- Metrics
    views_count         INTEGER DEFAULT 0,
    inquiries_count     INTEGER DEFAULT 0,
    bookmarks_count     INTEGER DEFAULT 0,
    
    -- Media
    video_tour_url      VARCHAR(500),
    virtual_tour_url    VARCHAR(500),
    
    -- Timestamps
    published_at        TIMESTAMP,
    last_updated_at     TIMESTAMP,
    created_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_properties_seller ON properties(seller_id);
CREATE INDEX idx_properties_status ON properties(status);
CREATE INDEX idx_properties_type ON properties(property_type, listing_type);
CREATE INDEX idx_properties_price ON properties(price);
CREATE INDEX idx_properties_location ON properties(latitude, longitude);
CREATE INDEX idx_properties_featured ON properties(is_featured, status);
CREATE INDEX idx_properties_created ON properties(created_at DESC);
```

#### Properties Translation Table
```sql
CREATE TABLE properties_lang (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    properties_id       UUID REFERENCES properties(id) ON DELETE CASCADE,
    lang                VARCHAR(10) NOT NULL,
    
    -- Translatable Text Fields
    title               VARCHAR(255) NOT NULL,
    description         TEXT NOT NULL,
    
    -- Translatable Location
    address             VARCHAR(500),
    city                VARCHAR(100),
    state               VARCHAR(100),
    country             VARCHAR(100),
    neighborhood        VARCHAR(100),
    
    -- Translatable Features
    key_features        TEXT[],  -- ['Spacious living room', 'Modern kitchen']
    nearby_places       JSONB,   -- [{type: 'school', name: '...', distance: '500m'}]
    
    -- SEO
    meta_title          VARCHAR(255),
    meta_description    VARCHAR(500),
    
    -- Timestamps
    created_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    UNIQUE(properties_id, lang)
);

CREATE INDEX idx_properties_lang_property ON properties_lang(properties_id);
CREATE INDEX idx_properties_lang_lang ON properties_lang(lang);
CREATE INDEX idx_properties_lang_city ON properties_lang(city);
```

#### Property Categories Table
```sql
CREATE TABLE property_categories (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code                VARCHAR(50) UNIQUE NOT NULL,  -- 'residential', 'commercial'
    parent_id           UUID REFERENCES property_categories(id),
    icon                VARCHAR(100),
    display_order       INTEGER DEFAULT 0,
    is_active           BOOLEAN DEFAULT TRUE,
    created_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_property_categories_parent ON property_categories(parent_id);
```

#### Property Categories Translation Table
```sql
CREATE TABLE property_categories_lang (
    id                      UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    property_categories_id  UUID REFERENCES property_categories(id) ON DELETE CASCADE,
    lang                    VARCHAR(10) NOT NULL,
    
    name                    VARCHAR(100) NOT NULL,
    description             TEXT,
    
    created_at              TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    UNIQUE(property_categories_id, lang)
);

CREATE INDEX idx_property_categories_lang_cat ON property_categories_lang(property_categories_id);
```

#### Amenities Table
```sql
CREATE TABLE amenities (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code                VARCHAR(50) UNIQUE NOT NULL,  -- 'pool', 'gym', 'parking'
    category            VARCHAR(50),  -- 'indoor', 'outdoor', 'building'
    icon                VARCHAR(100),
    is_active           BOOLEAN DEFAULT TRUE,
    created_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### Amenities Translation Table
```sql
CREATE TABLE amenities_lang (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    amenities_id        UUID REFERENCES amenities(id) ON DELETE CASCADE,
    lang                VARCHAR(10) NOT NULL,
    
    name                VARCHAR(100) NOT NULL,
    description         VARCHAR(255),
    
    created_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    UNIQUE(amenities_id, lang)
);

CREATE INDEX idx_amenities_lang_amenity ON amenities_lang(amenities_id);
```

#### Property Images Table
```sql
CREATE TABLE property_images (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    property_id         UUID REFERENCES properties(id) ON DELETE CASCADE,
    image_url           VARCHAR(500) NOT NULL,
    thumbnail_url       VARCHAR(500),
    is_primary          BOOLEAN DEFAULT FALSE,
    display_order       INTEGER DEFAULT 0,
    created_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_property_images_property ON property_images(property_id);
```

#### Posts Table (Base)
```sql
CREATE TABLE posts (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id             UUID REFERENCES users(id) ON DELETE CASCADE,
    property_id         UUID REFERENCES properties(id) ON DELETE SET NULL,
    
    -- Media (Non-translatable URLs)
    images              JSONB,  -- [{url: '...', thumbnail: '...'}]
    
    -- Engagement Metrics
    likes_count         INTEGER DEFAULT 0,
    comments_count      INTEGER DEFAULT 0,
    shares_count        INTEGER DEFAULT 0,
    views_count         INTEGER DEFAULT 0,
    
    -- Status
    is_visible          BOOLEAN DEFAULT TRUE,
    is_pinned           BOOLEAN DEFAULT FALSE,
    
    -- Timestamps
    created_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_posts_user ON posts(user_id);
CREATE INDEX idx_posts_property ON posts(property_id);
CREATE INDEX idx_posts_created ON posts(created_at DESC);
CREATE INDEX idx_posts_visible ON posts(is_visible, created_at DESC);
```

#### Posts Translation Table
```sql
CREATE TABLE posts_lang (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    posts_id            UUID REFERENCES posts(id) ON DELETE CASCADE,
    lang                VARCHAR(10) NOT NULL,
    
    -- Translatable Content
    content             TEXT NOT NULL,
    hashtags            VARCHAR(100)[],
    
    -- Timestamps
    created_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    UNIQUE(posts_id, lang)
);

CREATE INDEX idx_posts_lang_post ON posts_lang(posts_id);
CREATE INDEX idx_posts_lang_lang ON posts_lang(lang);
```

#### Reels Table (Base)
```sql
CREATE TABLE reels (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id             UUID REFERENCES users(id) ON DELETE CASCADE,
    property_id         UUID REFERENCES properties(id) ON DELETE SET NULL,
    
    -- Media (Non-translatable URLs)
    video_url           VARCHAR(500) NOT NULL,
    thumbnail_url       VARCHAR(500),
    duration_seconds    INTEGER NOT NULL,
    
    -- Engagement Metrics
    likes_count         INTEGER DEFAULT 0,
    comments_count      INTEGER DEFAULT 0,
    shares_count        INTEGER DEFAULT 0,
    views_count         INTEGER DEFAULT 0,
    
    -- Status
    is_visible          BOOLEAN DEFAULT TRUE,
    is_featured         BOOLEAN DEFAULT FALSE,
    
    -- Timestamps
    created_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_reels_user ON reels(user_id);
CREATE INDEX idx_reels_property ON reels(property_id);
CREATE INDEX idx_reels_created ON reels(created_at DESC);
CREATE INDEX idx_reels_visible ON reels(is_visible, created_at DESC);
```

#### Reels Translation Table
```sql
CREATE TABLE reels_lang (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    reels_id            UUID REFERENCES reels(id) ON DELETE CASCADE,
    lang                VARCHAR(10) NOT NULL,
    
    -- Translatable Content
    caption             TEXT,
    hashtags            VARCHAR(100)[],
    
    -- Timestamps
    created_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    UNIQUE(reels_id, lang)
);

CREATE INDEX idx_reels_lang_reel ON reels_lang(reels_id);
CREATE INDEX idx_reels_lang_lang ON reels_lang(lang);
```

#### Contact Requests Table
```sql
CREATE TABLE contact_requests (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    buyer_id            UUID REFERENCES users(id) ON DELETE CASCADE,
    seller_id           UUID REFERENCES users(id) ON DELETE CASCADE,
    property_id         UUID REFERENCES properties(id) ON DELETE SET NULL,
    message             TEXT,
    status              ENUM('pending', 'approved', 'rejected') DEFAULT 'pending',
    reviewed_by         UUID REFERENCES users(id),
    reviewed_at         TIMESTAMP,
    rejection_reason    TEXT,
    created_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    CONSTRAINT unique_active_request UNIQUE (buyer_id, seller_id, status)
);

CREATE INDEX idx_contact_requests_buyer ON contact_requests(buyer_id);
CREATE INDEX idx_contact_requests_seller ON contact_requests(seller_id);
CREATE INDEX idx_contact_requests_status ON contact_requests(status);
```

#### Conversations Table
```sql
CREATE TABLE conversations (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    buyer_id            UUID REFERENCES users(id) ON DELETE CASCADE,
    seller_id           UUID REFERENCES users(id) ON DELETE CASCADE,
    contact_request_id  UUID REFERENCES contact_requests(id),
    last_message_at     TIMESTAMP,
    is_active           BOOLEAN DEFAULT TRUE,
    created_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    CONSTRAINT unique_conversation UNIQUE (buyer_id, seller_id)
);

CREATE INDEX idx_conversations_buyer ON conversations(buyer_id);
CREATE INDEX idx_conversations_seller ON conversations(seller_id);
```

#### Messages Table (MongoDB Schema)
```javascript
// MongoDB Collection: messages
{
    _id: ObjectId,
    conversationId: UUID,
    senderId: UUID,
    receiverId: UUID,
    type: "text" | "image",
    content: String,
    imageUrl: String,
    isRead: Boolean,
    readAt: Date,
    isDeleted: Boolean,
    createdAt: Date
}

// Indexes
db.messages.createIndex({ conversationId: 1, createdAt: -1 })
db.messages.createIndex({ receiverId: 1, isRead: 1 })
```

#### Advertisements Table
```sql
CREATE TABLE advertisements (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    seller_id           UUID REFERENCES users(id) ON DELETE CASCADE,
    property_id         UUID REFERENCES properties(id) ON DELETE CASCADE,
    title               VARCHAR(255) NOT NULL,
    description         TEXT,
    ad_type             ENUM('featured', 'banner', 'sponsored') NOT NULL,
    placement           ENUM('feed', 'reels', 'search', 'all') NOT NULL,
    target_locations    JSONB,
    target_demographics JSONB,
    start_date          DATE NOT NULL,
    end_date            DATE NOT NULL,
    budget              DECIMAL(10,2) NOT NULL,
    spent               DECIMAL(10,2) DEFAULT 0,
    impressions         INTEGER DEFAULT 0,
    clicks              INTEGER DEFAULT 0,
    status              ENUM('pending', 'approved', 'rejected', 'active', 
                             'paused', 'completed') DEFAULT 'pending',
    reviewed_by         UUID REFERENCES users(id),
    reviewed_at         TIMESTAMP,
    rejection_reason    TEXT,
    created_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_ads_seller ON advertisements(seller_id);
CREATE INDEX idx_ads_status ON advertisements(status);
CREATE INDEX idx_ads_dates ON advertisements(start_date, end_date);
```

#### Follows Table
```sql
CREATE TABLE follows (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    follower_id         UUID REFERENCES users(id) ON DELETE CASCADE,
    following_id        UUID REFERENCES users(id) ON DELETE CASCADE,
    created_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    CONSTRAINT unique_follow UNIQUE (follower_id, following_id),
    CONSTRAINT no_self_follow CHECK (follower_id != following_id)
);

CREATE INDEX idx_follows_follower ON follows(follower_id);
CREATE INDEX idx_follows_following ON follows(following_id);
```

#### Likes Table
```sql
CREATE TABLE likes (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id             UUID REFERENCES users(id) ON DELETE CASCADE,
    post_id             UUID REFERENCES posts(id) ON DELETE CASCADE,
    reel_id             UUID REFERENCES reels(id) ON DELETE CASCADE,
    created_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    CONSTRAINT like_one_target CHECK (
        (post_id IS NOT NULL AND reel_id IS NULL) OR
        (post_id IS NULL AND reel_id IS NOT NULL)
    ),
    CONSTRAINT unique_like UNIQUE (user_id, post_id, reel_id)
);

CREATE INDEX idx_likes_user ON likes(user_id);
CREATE INDEX idx_likes_post ON likes(post_id);
CREATE INDEX idx_likes_reel ON likes(reel_id);
```

#### Comments Table
```sql
CREATE TABLE comments (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id             UUID REFERENCES users(id) ON DELETE CASCADE,
    post_id             UUID REFERENCES posts(id) ON DELETE CASCADE,
    reel_id             UUID REFERENCES reels(id) ON DELETE CASCADE,
    parent_id           UUID REFERENCES comments(id) ON DELETE CASCADE,
    content             TEXT NOT NULL,
    likes_count         INTEGER DEFAULT 0,
    is_visible          BOOLEAN DEFAULT TRUE,
    created_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    CONSTRAINT comment_one_target CHECK (
        (post_id IS NOT NULL AND reel_id IS NULL) OR
        (post_id IS NULL AND reel_id IS NOT NULL)
    )
);

CREATE INDEX idx_comments_post ON comments(post_id);
CREATE INDEX idx_comments_reel ON comments(reel_id);
CREATE INDEX idx_comments_parent ON comments(parent_id);
```

#### Property Bookmarks Table
```sql
CREATE TABLE property_bookmarks (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id             UUID REFERENCES users(id) ON DELETE CASCADE,
    property_id         UUID REFERENCES properties(id) ON DELETE CASCADE,
    created_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    CONSTRAINT unique_bookmark UNIQUE (user_id, property_id)
);

CREATE INDEX idx_bookmarks_user ON property_bookmarks(user_id);
```

#### Notifications Table
```sql
CREATE TABLE notifications (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id             UUID REFERENCES users(id) ON DELETE CASCADE,
    type                VARCHAR(50) NOT NULL,
    title               VARCHAR(255) NOT NULL,
    message             TEXT,
    data                JSONB,
    is_read             BOOLEAN DEFAULT FALSE,
    read_at             TIMESTAMP,
    created_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_notifications_user ON notifications(user_id, is_read);
CREATE INDEX idx_notifications_created ON notifications(created_at DESC);
```

#### Languages Table
```sql
CREATE TABLE languages (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code                VARCHAR(10) UNIQUE NOT NULL,  -- 'en', 'ar', 'fr'
    name                VARCHAR(50) NOT NULL,         -- 'English', 'العربية'
    native_name         VARCHAR(50) NOT NULL,         -- 'English', 'العربية'
    direction           VARCHAR(3) NOT NULL,          -- 'ltr', 'rtl'
    is_default          BOOLEAN DEFAULT FALSE,
    is_active           BOOLEAN DEFAULT TRUE,
    display_order       INTEGER DEFAULT 0,
    created_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_languages_active ON languages(is_active, display_order);
CREATE INDEX idx_languages_default ON languages(is_default);

-- Initial languages
INSERT INTO languages (code, name, native_name, direction, is_default, display_order) VALUES
('ar', 'Arabic', 'العربية', 'rtl', TRUE, 1),
('en', 'English', 'English', 'ltr', FALSE, 2),
('fr', 'French', 'Français', 'ltr', FALSE, 3);
```

#### UI Labels Table
```sql
CREATE TABLE ui_labels (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code                VARCHAR(100) UNIQUE NOT NULL,  -- 'nav.home', 'property.details.bedrooms'
    category            VARCHAR(50),                    -- 'navigation', 'property', 'auth'
    context             VARCHAR(100),                   -- Additional context for translators
    created_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_ui_labels_category ON ui_labels(category);
CREATE INDEX idx_ui_labels_code ON ui_labels(code);
```

#### UI Labels Translation Table
```sql
CREATE TABLE ui_labels_lang (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    ui_labels_id        UUID REFERENCES ui_labels(id) ON DELETE CASCADE,
    lang                VARCHAR(10) NOT NULL,
    text                VARCHAR(500) NOT NULL,
    created_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    UNIQUE(ui_labels_id, lang)
);

CREATE INDEX idx_ui_labels_lang_label ON ui_labels_lang(ui_labels_id);
CREATE INDEX idx_ui_labels_lang_lang ON ui_labels_lang(lang);

-- Sample UI labels
INSERT INTO ui_labels (code, category, context) VALUES
('nav.home', 'navigation', 'Main navigation menu'),
('nav.properties', 'navigation', 'Main navigation menu'),
('nav.sellers', 'navigation', 'Main navigation menu'),
('nav.about', 'navigation', 'Main navigation menu'),
('property.details.bedrooms', 'property', 'Property specification label'),
('property.details.bathrooms', 'property', 'Property specification label'),
('property.details.size', 'property', 'Property specification label'),
('auth.login.submit', 'auth', 'Login form button'),
('auth.register.submit', 'auth', 'Registration form button'),
('common.save', 'common', 'Generic save button'),
('common.cancel', 'common', 'Generic cancel button'),
('common.delete', 'common', 'Generic delete button');

-- Sample translations
INSERT INTO ui_labels_lang (ui_labels_id, lang, text) VALUES
((SELECT id FROM ui_labels WHERE code='nav.home'), 'ar', 'الرئيسية'),
((SELECT id FROM ui_labels WHERE code='nav.home'), 'en', 'Home'),
((SELECT id FROM ui_labels WHERE code='nav.properties'), 'ar', 'العقارات'),
((SELECT id FROM ui_labels WHERE code='nav.properties'), 'en', 'Properties'),
((SELECT id FROM ui_labels WHERE code='property.details.bedrooms'), 'ar', 'غرف النوم'),
((SELECT id FROM ui_labels WHERE code='property.details.bedrooms'), 'en', 'Bedrooms'),
((SELECT id FROM ui_labels WHERE code='property.details.bathrooms'), 'ar', 'الحمامات'),
((SELECT id FROM ui_labels WHERE code='property.details.bathrooms'), 'en', 'Bathrooms'),
((SELECT id FROM ui_labels WHERE code='auth.login.submit'), 'ar', 'تسجيل الدخول'),
((SELECT id FROM ui_labels WHERE code='auth.login.submit'), 'en', 'Login'),
((SELECT id FROM ui_labels WHERE code='common.save'), 'ar', 'حفظ'),
((SELECT id FROM ui_labels WHERE code='common.save'), 'en', 'Save');
```

---

## 12. API Endpoints

### 12.1 Authentication APIs

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/v1/auth/register` | Register new user |
| POST | `/api/v1/auth/login` | User login |
| POST | `/api/v1/auth/logout` | User logout |
| POST | `/api/v1/auth/refresh-token` | Refresh access token |
| POST | `/api/v1/auth/forgot-password` | Request password reset |
| POST | `/api/v1/auth/reset-password` | Reset password |
| POST | `/api/v1/auth/verify-email` | Verify email with OTP |
| POST | `/api/v1/auth/verify-phone` | Verify phone with OTP |
| POST | `/api/v1/auth/social/google` | Google OAuth login |
| POST | `/api/v1/auth/social/apple` | Apple OAuth login |

### 12.2 User APIs

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/users/me` | Get current user profile |
| PUT | `/api/v1/users/me` | Update current user profile |
| DELETE | `/api/v1/users/me` | Delete account |
| GET | `/api/v1/users/:id` | Get user by ID |
| GET | `/api/v1/users/:id/properties` | Get user's properties |
| GET | `/api/v1/users/:id/posts` | Get user's posts |
| GET | `/api/v1/users/:id/reels` | Get user's reels |
| POST | `/api/v1/users/:id/follow` | Follow user |
| DELETE | `/api/v1/users/:id/follow` | Unfollow user |
| GET | `/api/v1/users/:id/followers` | Get user's followers |
| GET | `/api/v1/users/:id/following` | Get user's following |

### 12.3 Property APIs

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/properties` | List properties (with filters) |
| POST | `/api/v1/properties` | Create property (seller only) |
| GET | `/api/v1/properties/:id` | Get property details |
| PUT | `/api/v1/properties/:id` | Update property |
| DELETE | `/api/v1/properties/:id` | Delete property |
| POST | `/api/v1/properties/:id/images` | Upload property images |
| DELETE | `/api/v1/properties/:id/images/:imageId` | Delete image |
| POST | `/api/v1/properties/:id/bookmark` | Bookmark property |
| DELETE | `/api/v1/properties/:id/bookmark` | Remove bookmark |
| GET | `/api/v1/properties/bookmarks` | Get bookmarked properties |
| GET | `/api/v1/properties/search` | Advanced property search |
| GET | `/api/v1/properties/nearby` | Get nearby properties |

### 12.4 Social APIs

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/feed` | Get personalized feed |
| GET | `/api/v1/posts` | List posts |
| POST | `/api/v1/posts` | Create post |
| GET | `/api/v1/posts/:id` | Get post details |
| PUT | `/api/v1/posts/:id` | Update post |
| DELETE | `/api/v1/posts/:id` | Delete post |
| POST | `/api/v1/posts/:id/like` | Like post |
| DELETE | `/api/v1/posts/:id/like` | Unlike post |
| GET | `/api/v1/posts/:id/comments` | Get post comments |
| POST | `/api/v1/posts/:id/comments` | Add comment |
| GET | `/api/v1/reels` | List reels |
| POST | `/api/v1/reels` | Create reel |
| GET | `/api/v1/reels/:id` | Get reel details |
| DELETE | `/api/v1/reels/:id` | Delete reel |
| POST | `/api/v1/reels/:id/like` | Like reel |
| DELETE | `/api/v1/reels/:id/like` | Unlike reel |
| GET | `/api/v1/reels/:id/comments` | Get reel comments |
| POST | `/api/v1/reels/:id/comments` | Add comment |
| GET | `/api/v1/explore` | Get explore/discover content |
| GET | `/api/v1/hashtags/:tag` | Get content by hashtag |

### 12.5 Contact APIs

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/contacts/requests` | Get contact requests |
| POST | `/api/v1/contacts/requests` | Send contact request |
| GET | `/api/v1/contacts/requests/:id` | Get request details |
| DELETE | `/api/v1/contacts/requests/:id` | Cancel request |
| GET | `/api/v1/contacts` | Get approved contacts |
| POST | `/api/v1/contacts/:id/block` | Block contact |
| DELETE | `/api/v1/contacts/:id/block` | Unblock contact |

### 12.6 Chat APIs

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/conversations` | Get conversations |
| GET | `/api/v1/conversations/:id` | Get conversation details |
| GET | `/api/v1/conversations/:id/messages` | Get messages |
| POST | `/api/v1/conversations/:id/messages` | Send message |
| PUT | `/api/v1/conversations/:id/read` | Mark as read |
| POST | `/api/v1/conversations/:id/archive` | Archive conversation |
| DELETE | `/api/v1/messages/:id` | Delete message |

### 12.7 Advertisement APIs

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/ads` | Get seller's ads |
| POST | `/api/v1/ads` | Create ad campaign |
| GET | `/api/v1/ads/:id` | Get ad details |
| PUT | `/api/v1/ads/:id` | Update ad |
| DELETE | `/api/v1/ads/:id` | Cancel ad |
| POST | `/api/v1/ads/:id/pause` | Pause ad |
| POST | `/api/v1/ads/:id/resume` | Resume ad |
| GET | `/api/v1/ads/:id/analytics` | Get ad analytics |

### 12.8 Admin APIs

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/admin/users` | List all users |
| GET | `/api/v1/admin/users/:id` | Get user details |
| PUT | `/api/v1/admin/users/:id` | Update user |
| POST | `/api/v1/admin/users/:id/suspend` | Suspend user |
| POST | `/api/v1/admin/users/:id/activate` | Activate user |
| GET | `/api/v1/admin/contact-requests` | Get pending requests |
| PUT | `/api/v1/admin/contact-requests/:id` | Approve/reject request |
| GET | `/api/v1/admin/content/reported` | Get reported content |
| PUT | `/api/v1/admin/content/:id/moderate` | Moderate content |
| GET | `/api/v1/admin/ads/pending` | Get pending ads |
| PUT | `/api/v1/admin/ads/:id/review` | Approve/reject ad |
| GET | `/api/v1/admin/analytics/users` | User analytics |
| GET | `/api/v1/admin/analytics/properties` | Property analytics |
| GET | `/api/v1/admin/analytics/engagement` | Engagement analytics |
| GET | `/api/v1/admin/analytics/revenue` | Revenue analytics |

### 12.9 WebSocket Events

```
SOCKET EVENTS:
├── Connection
│   ├── connect
│   ├── disconnect
│   └── authenticate
├── Chat
│   ├── message:send
│   ├── message:received
│   ├── message:read
│   └── typing:indicator
├── Notifications
│   ├── notification:new
│   └── notification:read
└── Presence
    ├── user:online
    └── user:offline
```

---

## 13. Security & Privacy Controls

### 13.1 Authentication Security
- JWT with short expiry (15 min access, 7 day refresh)
- Token blacklisting on logout
- Device fingerprinting
- Suspicious login detection
- Two-factor authentication (optional)

### 13.2 Data Protection
```
SECURITY MEASURES:
├── Encryption
│   ├── At Rest: AES-256 for sensitive data
│   ├── In Transit: TLS 1.3
│   └── Chat: Optional E2E encryption
├── Access Control
│   ├── Role-based access control (RBAC)
│   ├── Resource-level permissions
│   └── API key management
├── Input Validation
│   ├── Request sanitization
│   ├── SQL injection prevention
│   └── XSS prevention
└── Rate Limiting
    ├── API: 100 requests/minute
    ├── Auth: 5 attempts/15 minutes
    └── Upload: 10 files/minute
```

### 13.3 Privacy Features
- Profile visibility settings
- Block user functionality
- Data export (GDPR compliance)
- Account deletion with data purge
- Chat message deletion
- Content visibility controls

### 13.4 Audit Logging
```
LOGGED EVENTS:
├── Authentication (login, logout, password change)
├── Profile changes
├── Property actions (create, edit, delete)
├── Contact request actions
├── Admin actions
├── Content moderation
└── Payment transactions
```

---

## 14. Content Moderation Logic

### 14.1 Automated Moderation

```
AUTO-MODERATION PIPELINE:
┌─────────────────────────────────────────────────────────────┐
│                    CONTENT INPUT                             │
│              (Post/Reel/Message/Property)                    │
└──────────────────────────┬──────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                 FILTER 1: TEXT ANALYSIS                      │
│  ├── Profanity filter                                       │
│  ├── Hate speech detection                                  │
│  ├── Spam detection                                         │
│  └── Contact info leak detection                            │
└──────────────────────────┬──────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                 FILTER 2: IMAGE ANALYSIS                     │
│  ├── NSFW detection                                         │
│  ├── Violence detection                                     │
│  └── Watermark/copyright detection                          │
└──────────────────────────┬──────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                 FILTER 3: VIDEO ANALYSIS                     │
│  ├── Audio content check                                    │
│  ├── Visual content check                                   │
│  └── Duration validation                                    │
└──────────────────────────┬──────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                    DECISION ENGINE                           │
│  ├── PASS ──> Content Published                             │
│  ├── FLAG ──> Sent to Admin Review Queue                    │
│  └── BLOCK ──> Content Rejected + User Warned               │
└─────────────────────────────────────────────────────────────┘
```

### 14.2 Manual Moderation Workflow

```
ADMIN MODERATION FLOW:
1. Content flagged (auto or user report)
2. Added to moderation queue
3. Admin reviews content
4. Actions available:
   ├── Approve: Content goes live
   ├── Remove: Content deleted
   ├── Warn: User receives warning
   └── Suspend: User account suspended
5. User notified of decision
6. Appeal process available (7 days)
```

### 14.3 User Reporting

```
REPORT CATEGORIES:
├── Spam
├── Harassment
├── Hate speech
├── Nudity/Sexual content
├── Violence
├── False information
├── Scam/Fraud
├── Copyright violation
└── Other
```

---

## 15. Edge Cases & Error Handling

### 15.1 Contact Request Edge Cases

| Scenario | Handling |
|----------|----------|
| Buyer requests same seller twice | Block duplicate, show existing request status |
| Seller deletes account during pending request | Auto-reject, refund if paid |
| Admin doesn't respond within 24h | Auto-escalate to senior admin |
| Buyer blocked by seller after approval | Disable chat, notify admin |
| Request made for sold property | Allow, note property status |

### 15.2 Property Listing Edge Cases

| Scenario | Handling |
|----------|----------|
| Duplicate property submission | AI-based detection, flag for review |
| Invalid address/coordinates | Show warning, request verification |
| Price set to 0 or extremely high | Validation error, require reasonable range |
| All images deleted from listing | Require minimum 1 image, prevent publish |
| Seller account suspended with active listings | Hide listings, restore on reinstatement |

### 15.3 Chat System Edge Cases

| Scenario | Handling |
|----------|----------|
| Message sent when recipient offline | Queue message, deliver on reconnect |
| Large image upload (>10MB) | Compress or reject |
| Network disconnect during send | Retry mechanism, show pending status |
| User blocked mid-conversation | Disable chat, show blocked message |
| Chat history exceeds storage limit | Archive old messages, maintain recent 1000 |

### 15.4 Social Content Edge Cases

| Scenario | Handling |
|----------|----------|
| Reel upload fails mid-process | Save draft, allow retry |
| Video exceeds 60 seconds | Trim option or reject |
| Post with invalid property tag | Remove tag, publish post |
| Comment on deleted content | Show "content unavailable" |
| Like action during high traffic | Queue, process async |

### 15.5 Advertisement Edge Cases

| Scenario | Handling |
|----------|----------|
| Property sold during active ad | Pause ad, notify seller, offer transfer |
| Payment fails after approval | Revert to pending, notify seller |
| Ad budget depleted mid-day | Pause until next period or top-up |
| Multiple ads for same property | Block, limit to 1 active ad per property |
| Ad content changed after approval | Require re-approval |

---

## 16. Appendix

### 16.1 Glossary

| Term | Definition |
|------|------------|
| Reel | Short-form vertical video content (15-60 seconds) |
| Post | Social content with text and/or images |
| Contact Request | Formal request from buyer to contact seller |
| Conversation | Chat thread between approved buyer-seller pair |
| Featured Listing | Property promoted with additional visibility |
| Verification Badge | Indicator of verified identity/credentials |

### 16.2 Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | Feb 4, 2026 | Initial PRD and Technical Specification |
| 1.1 | Feb 4, 2026 | Added Seller Portfolio System & Vertical Language Architecture |

---

## 17. Summary of Key Enhancements

### 17.1 Seller Portfolio System

The Brocker platform now features a **comprehensive Seller Portfolio System** that transforms basic seller profiles into powerful professional showcases:

#### Key Features:
- **8 Modular Components**: Identity, Credentials, Showcase, Services, Performance, Social, Reviews, and Company modules
- **Portfolio Completeness Tracking**: 0-100% scoring system with visibility benefits
- **Professional Credentials**: Licenses, certifications, awards, and education tracking
- **Performance Metrics**: Auto-calculated statistics on sales, response time, and client satisfaction
- **Achievement Badges**: 8 different badges (Top Performer, 5-Star Seller, Verified Pro, etc.)
- **SEO Optimization**: Custom URLs, meta tags, rich snippets, and QR codes
- **Privacy Controls**: Granular visibility settings per module
- **Analytics Dashboard**: Comprehensive tracking of profile views, engagement, and performance

#### Database Impact:
- **New Tables**: `seller_profiles` (enhanced), `seller_profiles_lang`, `seller_credentials`, `seller_credentials_lang`, `seller_reviews`, `seller_reviews_lang`
- **50+ New Fields**: Covering all aspects of professional identity and performance

### 17.2 Vertical Language Architecture

The platform implements a **Vertical Language System** for scalable multi-language support:

#### Key Features:
- **Base + Translation Table Pattern**: Clean separation of data and translations
- **Flattening Mechanism**: Automatic merging of translations at API layer
- **Fallback Support**: Graceful degradation to default language
- **UI Labels System**: Dedicated translation for all interface elements
- **Language Management**: Support for unlimited languages with RTL/LTR directionality
- **Translation Coverage Tracking**: Monitoring of translation completeness
- **Performance Optimization**: Materialized views for frequently accessed data

#### Database Impact:
- **New Tables**: `languages`, `ui_labels`, `ui_labels_lang`
- **Translation Tables**: `seller_profiles_lang`, `properties_lang`, `posts_lang`, `reels_lang`, `property_categories_lang`, `amenities_lang`, `seller_credentials_lang`, `seller_reviews_lang`
- **Naming Convention**: All translation tables follow `{table}_lang` pattern
- **Initial Support**: Arabic (default), English, French

#### Technical Implementation:
```
Translation Flow:
1. Client requests data with ?lang=ar parameter
2. API Gateway extracts language preference
3. Service Layer queries base table
4. Translation Hydrator performs LEFT JOIN with _lang table
5. Flattened response returned with merged translations
6. Frontend displays localized content
```

### 17.3 Enhanced Database Schema

The database schema has been significantly enhanced:

#### Statistics:
- **Total Tables**: 40+ (including all translation tables)
- **Translation Tables**: 10+ dedicated `_lang` tables
- **New Indexes**: 50+ for optimized query performance
- **JSONB Fields**: 15+ for flexible, schema-less data storage
- **Foreign Keys**: 60+ maintaining referential integrity

#### Key Improvements:
- **Normalized Structure**: Separation of translatable and non-translatable data
- **Scalability**: Easy addition of new languages without schema changes
- **Performance**: Strategic indexing on frequently queried fields
- **Flexibility**: JSONB fields for evolving requirements
- **Data Integrity**: Comprehensive constraints and cascading deletes

### 17.4 API Enhancements

All API endpoints now support:
- **Language Parameter**: `?lang=ar` for requesting specific translations
- **Translation CRUD**: Dedicated endpoints for managing translations
- **Bulk Operations**: Creating records with multiple language versions
- **Fallback Logic**: Automatic fallback to default language

### 17.5 Frontend Requirements

The frontend must implement:
- **Language Switcher**: UI component for changing active language
- **RTL/LTR Support**: Dynamic direction switching based on language
- **Translation Helper**: Utility function for accessing UI labels
- **Loading States**: Smooth transitions during language changes
- **Persistent Preference**: Storing user's language choice

### 17.6 Migration Path

For existing implementations:
1. **Phase 1**: Create all `_lang` tables
2. **Phase 2**: Migrate existing text data to translation tables
3. **Phase 3**: Update API layer to use flattening mechanism
4. **Phase 4**: Update frontend to support language switching
5. **Phase 5**: Add translations for additional languages

---

**Document End**

*This document serves as the foundational specification for the Brocker platform development. All features and requirements are subject to refinement based on stakeholder feedback and technical feasibility assessments.*

**Version 1.1 includes comprehensive enhancements for Seller Portfolio System and Vertical Language Architecture, enabling Brocker to compete in global real estate markets with professional-grade seller profiles and seamless multi-language support.*
