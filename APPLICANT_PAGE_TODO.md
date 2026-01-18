# Applicant Page - Future Implementation

## Table of Contents

- [Context](#context)
- [Decisions Made](#decisions-made)
  - [Form Platform](#form-platform-tallyhttpstally.so)
  - [Form Access](#form-access-referral-based-not-public)
  - [Form Focus](#form-focus-financial-need)
- [Implementation Plan](#implementation-plan)
  - [1. Add Applicants Nav Tab](#1-add-applicants-nav-tab)
  - [2. Create Applicants Page](#2-create-applicants-page)
  - [3. Create Tally Form](#3-create-tally-form)
  - [4. Update Homepage](#4-update-homepage)
- [Tally Form Setup Guide](#tally-form-setup-guide)
  - [Form Title](#form-title)
  - [Form Introduction](#form-introduction)
  - [Form Fields](#form-fields)
  - [Closing Text](#closing-text)
- [Important Disclosure](#important-disclosure)
- [Notes](#notes)

---

## Context

The website is currently tailored toward donors. We need to add a section for potential scholarship applicants.

---

## Decisions Made

### Form Platform: Tally (https://tally.so)
- **Why Tally over JotForm**: We don't need HIPAA compliance (treatment center partner handles medical intake), so Tally's unlimited free tier is better than JotForm's 100/month limit
- **Why Tally over Google Forms**: More professional appearance, better UX

### Form Access: Referral-Based (Not Public)
- **The form link is NOT listed on the website** to prevent spam
- Applicants must be referred by a partner treatment center
- The treatment center provides the form link to qualified applicants
- Website should explain this process clearly so applicants know to work with the treatment center first

### Form Focus: Financial Need
The scholarship application should focus on:
- Contact information
- Financial need/circumstances
- Why they're seeking help (general narrative)
- Treatment center they're applying for (if applicable)
- Reference contact (optional)

Medical/health questions are NOT needed - the partnered treatment center handles all clinical intake and HIPAA-related information.

---

## Implementation Plan

### 1. Add Applicants Nav Tab
Update `src/components/Navigation.tsx` to add a new nav item linking to `/apply` or `/applicants`

### 2. Create Applicants Page
New page at `src/app/applicants/page.tsx` (or `apply/page.tsx`) containing:
- Information about the scholarship program
- Eligibility criteria
- What to expect from the process
- **Explanation that applicants receive the form link after referral from a partner treatment center**
- Note that we're happy to partner with new treatment centers (contact us if interested)
- Contact info for questions

### 3. Create Tally Form
See [Tally Form Setup Guide](#tally-form-setup-guide) below for detailed instructions.

### 4. Update Homepage
Consider adding a small "Seeking Help?" section that directs applicants to the new page, so they don't feel the site is only for donors.

---

## Tally Form Setup Guide

Step-by-step instructions for building the form in Tally.

### Form Title

**One Song Foundation Scholarship Application**

### Form Introduction

Add this as a text block at the top of the form:

> Thank you for your interest in the One Song Foundation scholarship program. This application helps us understand your financial situation so we can best support your recovery journey.
>
> **Please note:** Scholarship funds are paid directly to treatment centers on your behalf. Applicants do not receive funds directly.

### Form Fields

| Order | Field Label | Tally Field Type | Required? |
|-------|-------------|------------------|-----------|
| 1 | Full Name | Short text | Yes |
| 2 | Email Address | Email | Yes |
| 3 | Phone Number | Phone | Yes |
| 4 | City, State | Short text | Yes |
| 5 | Which treatment center referred you to One Song Foundation? | Short text | Yes |
| 6 | Briefly describe your current financial situation | Long text | Yes |
| 7 | What type of treatment are you seeking? | Multiple choice (Mental health / Addiction / Both) | Yes |
| 8 | Is there anything else you'd like us to know? | Long text | No |

### Closing Text

Add this as a text block at the end of the form:

> We review applications personally and will be in touch within 5-7 business days. If you have questions, contact us at [your email].

---

## Important Disclosure

**Funds go directly to treatment centers, not applicants.**

The applicants page and form must clearly state:
- Scholarship funds are paid directly to the treatment center on behalf of the applicant
- Applicants do not receive money directly
- This ensures funds are used for their intended purpose (treatment services)

This should be prominently displayed on the applicants page and reiterated in the form introduction.

---

## Notes

- Keep the application process human - this is about connecting with people in need, not collecting data
- Follow up personally with applicants rather than relying solely on form automation
