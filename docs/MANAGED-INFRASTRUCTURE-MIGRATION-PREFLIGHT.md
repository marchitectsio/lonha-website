# LONHA / AEA Managed Infrastructure Migration — Preflight

Status: **WAITING ON CLIENT SELECTION / ACCESS**

The website build itself is already complete and live. This document covers only the separate Weebly exit + hosting + email + security scope offered on August 20, 2026.

## Current client-facing options
The latest sent option sheet lists:
- 1 year — $599
- 2 years — $799
- 3 years — $999

These are proposed term options, not an established receivable until the client selects a term and accepts it. The source sheet itself says “Mock pricing sheet — not yet issued.”

## Included scope from the option sheet
- Weebly exit and migration coordination
- domain / DNS connection
- SSL setup and launch QA
- managed website hosting for up to 50 domains/sites under the selected infrastructure environment
- professional business email setup, including aliases/forwarders where supported by the provider
- 24/7 security monitoring plus uptime/SSL/security-incident alerts
- 24–48 business-hour support response target for hosting, email, and security issues
- client-controlled ownership and developer portability

## Inputs required before any migration change
Do not change DNS, registrar, hosting, email, or Weebly configuration until every applicable item below is confirmed.

### Commercial
- [ ] Client selected 1-year / 2-year / 3-year term
- [ ] Acceptance/payment status confirmed in CLIENTS & REVENUE
- [ ] Any third-party registrar, licensed mailbox, or premium service cost disclosed before purchase

### Domain ownership
- [ ] Exact domain #1 confirmed
- [ ] Exact domain #2 confirmed
- [ ] Current registrar identified for each domain
- [ ] Client-controlled registrar account or authorized transfer path confirmed
- [ ] Transfer lock status checked
- [ ] Transfer authorization/EPP code obtained only when actually required
- [ ] Nameservers and current DNS zone exported before changes

### Current Weebly state
- [ ] Current Weebly account/access confirmed
- [ ] Current site/domain bindings recorded
- [ ] Current redirects recorded
- [ ] Existing DNS records recorded before migration
- [ ] Existing email-related records recorded separately so mail is not broken by a nameserver change

### Email
- [ ] Current provider confirmed for every active mailbox/domain
- [ ] Required mailboxes listed
- [ ] Required aliases/forwarders listed
- [ ] Current MX records recorded
- [ ] SPF recorded
- [ ] DKIM recorded
- [ ] DMARC recorded
- [ ] New mailbox/provider limits confirmed before promising features
- [ ] Mail migration path defined if mailbox history must move

### Hosting / launch
- [ ] Target hosting account is client-controlled or ownership arrangement is documented
- [ ] Production project/repository confirmed
- [ ] Custom domains staged in target host
- [ ] SSL expected/verified
- [ ] Redirect map tested
- [ ] English navigation tested
- [ ] Spanish navigation tested
- [ ] contact path tested
- [ ] privacy/resources pages tested
- [ ] mobile QA completed
- [ ] rollback path documented before DNS cutover

### Monitoring / support
- [ ] Security alert recipient(s) confirmed
- [ ] Uptime alert recipient(s) confirmed
- [ ] SSL-expiration alert recipient(s) confirmed
- [ ] Support contact route confirmed
- [ ] 24–48 business-hour target recorded as a response target, not a guarantee of third-party resolution

## Safe migration order
1. Confirm selected term and authorization.
2. Export/record the existing registrar, DNS, Weebly, and email state.
3. Create client-owned target hosting/registrar/email resources as applicable.
4. Stage and test the site before touching production DNS.
5. Reproduce all required mail records and redirects.
6. Connect the domain during a controlled cutover window.
7. Verify SSL, site routes, redirects, and email send/receive.
8. Run mobile/desktop launch QA.
9. Enable monitoring/alerts.
10. Record final ownership, providers, renewal dates, and support handoff.

## Stop conditions
Stop rather than guessing if:
- a term has not been selected,
- ownership of a domain/account is unclear,
- the current mail provider is not known,
- a DNS record appears undocumented,
- a migration would require payment not yet approved,
- the client has not authorized the relevant account change.

## Definition of complete
The infrastructure project is complete only when the selected commercial term is accepted, both domains are under the agreed ownership structure, production hosting is live, email works, SSL and redirects pass, security/uptime alerts are configured to approved contacts, launch QA passes, and the client receives a final ownership/support handoff.