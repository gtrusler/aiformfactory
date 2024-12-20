# Project Directory Structure

```
.
|-- app/
|   |-- api/
|   |   |-- ai/
|   |   |-- auth/
|   |   |-- lead/
|   |   |-- lemonsqueezy/
|   |   |-- stripe/
|   |   `-- webhook/
|   |-- blog/
|   |   |-- [articleId]/
|   |   |-- _assets/
|   |   |-- author/
|   |   `-- category/
|   |-- dashboard/
|   |-- privacy-policy/
|   |-- signin/
|   |-- tos/
|   `-- utils/
|-- components/
|   |-- GTMProvider/
|   |-- LandingPage/
|   |-- app/
|   |-- app-components/
|   |-- base/
|   |-- block/
|   |-- docs/
|   |-- landing-components/
|   `-- unused/
|-- hooks/
|   `-- docs/
|-- instructions/
|-- libs/
`-- node_modules/
```

## Directory Overview

### `/app`
Next.js application routes and API endpoints:
- Authentication and user management
- Blog functionality
- Dashboard interface
- Payment integrations (Stripe, LemonSqueezy)
- AI services

### `/components`
React components organized by feature:
- Base UI components
- Landing page elements
- Documentation components
- App-specific components
- GTM integration

### `/hooks`
Custom React hooks:
- Documentation-related hooks

### `/instructions`
Project documentation and guidelines

### `/libs`
Utility libraries and API integrations

### `/node_modules`
Third-party dependencies
