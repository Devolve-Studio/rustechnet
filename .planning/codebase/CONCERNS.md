# Concerns and Tech Debt

## Areas of Concern
- **Missing Automated Tests**: The lack of a configured testing framework increases the risk of regressions during updates or refactoring.
- **Large Dependency Footprint**: Heavy libraries like `three.js` and `gsap` along with map libraries could impact bundle size and performance if not lazy-loaded appropriately.

## Known Issues
- Currently, no major structural `TODO` or `FIXME` comments were identified at the root level, but manual review of complex components (like 3D viewers) may be needed to ensure performance.
