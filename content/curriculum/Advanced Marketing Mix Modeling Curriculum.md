---
title: Curriculum - Marketing Mix Modeling
description: ""
aliases:
  - Advanced Marketing Mix Modeling Curriculum
tags:
  - 🗺️MOC
  - marketing
  - data/analytics
  - 🌿budding
backlink:
  - "[[Marketing Mix Modeling]]"
---
## Executive Overview

**Domain**: Marketing Science & Econometrics for Marketing Measurement
**Role Focus**: Data Lead responsible for production MMM, experimentation, optimization, and governance
**Timeline**: 16-40 weeks (depending on depth)
**Prerequisites**: Strong [[data engineering]] background, [[python]]/[[r programming|R]] proficiency, basic statistics

## Your Core Deliverables as Data Lead

As the Data Lead for MMM in your CPG company, you must own:

1. **Production MMM System** - Automated, quarterly-refreshed models using [[python|Python]] or [[r programming|R]]
2. **Experiment Design Playbooks** - GeoLift templates and protocols
3. **Budget Optimizer** - Constraint-based allocation engine
4. **KPI Framework** - Unified measurement across MMM, experiments, clean rooms
5. **[[data governance|Governance]] Documentation** - Model cards, [[data pipeline|data lineage]], assumption logs
6. **Education Deck** - Executive-level explainer for non-technical stakeholders
7. **Measurement Stack Policy** - How MMM, experiments, and clean rooms integrate

## Curriculum Structure

### Quick Track (12-16 weeks): Production-focused

Covers core theory, two implementations (Robyn + PyMC-Marketing), validation, and deployment

### Deep Track (32-40 weeks): Expert mastery

Adds advanced statistics, CPG specialization, cutting-edge research, and organizational leadership

# QUICK TRACK: Production-Ready MMM (12-16 Weeks)

## Week 0: Orientation & Scope (2 days)

### Objectives

- Understand MMM's role in modern marketing measurement
- Grasp the "four stacks": theory, modeling, experimentation, production
- Map your learning journey

### Essential Reading

- **"An Analyst's Guide to MMM"** (Meta Robyn) - [facebookexperimental.github.io](https://facebookexperimental.github.io/Robyn/docs/analysts-guide-to-MMM/)
- "Marketing Mix Modeling: A Complete Guide for Strategic Marketers" (Measured, 2025)
- "Why marketing mix modeling is crucial in 2025 and beyond" - Search Engine Land

### Key Concepts

- MMM vs Attribution vs Incrementality testing
- Privacy-first measurement landscape (post-cookie era)
- MMM's 2025 renaissance: why now?
- CPG-specific considerations

### Action Items

- [ ] Read Analyst's Guide end-to-end
- [ ] Identify your company's current measurement gaps
- [ ] List available data sources
- [ ] Define success metrics for this learning journey

## Week 1: Market Response Foundations

### Core Theory: Demand Drivers & Market Response

**Key Concepts**:

- Base sales vs. incremental sales
- Endogenous vs. exogenous variables
- Competitive effects and market dynamics
- Seasonality patterns in CPG
- Promotional mechanics: BOGO, TPR, price discounts
- Distribution and availability effects

### Essential Reading

**Core Textbook** (chapters 1-3, 6):

- **"Market Response Models"** (2nd ed.) by Hanssens, Parsons & Schultz - [SpringerLink](https://link.springer.com/book/10.1007/b109775)
    - The foundational text for market response modeling
    - Covers demand theory, elasticity, and dynamics

**Survey Papers**:

- "Market Response Models and Marketing Practice" - Hanssens et al. - [ResearchGate](https://www.researchgate.net/publication/227652386_Market_response_models_and_marketing_practice)

    - Bridges theory and practice
    - Shows what actually gets used in industry
- "Modeling Marketing Dynamics by [[time series forecasting model|Time Series]] Econometrics" - Dekimpe & Hanssens - [SpringerLink](https://link.springer.com/article/10.1007/s11002-005-0455-0)

    - Time-series perspective on marketing effects
    - Dynamic modeling frameworks
- "[[time series forecasting model|Time-Series Models]] in Marketing" - Naik et al. - [UC Davis](https://prasadnaik.faculty.ucdavis.edu/wp-content/uploads/sites/422/2016/11/tsm2008.pdf)

    - Compact primer on time-series methods
    - Practical examples

### CPG-Specific Context

- Product life cycles and category dynamics
- Retailer power and trade spending
- Regional market differences
- Competitive response patterns
- Forward buying and pantry loading

### Practical Exercises

- Decompose historical sales into base + incremental
- Calculate price and promotional elasticities
- Identify structural breaks in your data
- Map competitor activity impact

### Action Items

- [ ] Read Hanssens chapters 1-3, 6
- [ ] Work through elasticity calculations
- [ ] Document your CPG category's unique dynamics
- [ ] Create glossary of CPG promotional terms

## Week 2: Adstock & Saturation Mechanics

### Core Theory: Non-Linear Response

**Adstock (Carryover Effects)**:

- Memory effect of advertising
- Decay over time after exposure
- Channel-specific persistence

**Saturation (Diminishing Returns)**:

- S-curve response to marketing spend
- Threshold and ceiling effects
- Optimal spending levels

### Essential Reading

**Adstock**:

- **"Adstock revisited"** - Franses - [Erasmus University](https://pure.eur.nl/files/136498538/Adstock_revisited.pdf)
    
    - Modern treatment of Koyck lag structure
    - Default to unrestricted Koyck unless data prove otherwise
- "Understanding the Role of Adstock in Advertising Decisions" - Gijsenberg et al.
    
    - Strategic implications of adstock
    - Business decision-making
- "What are adstock and carryover effects and how can they be modelled?" - Sellforte
    
    - Practical implementation guide
    - Different transformation approaches

**Saturation**:

- **"Media saturation and lagging"** - Google Meridian docs - [Google for Developers](https://developers.google.com/meridian/docs/advanced-modeling/media-saturation-lagging)
    
    - Hill function formalism
    - Prefer Hill over ad-hoc splines for stability
- "Exploring Different Approaches to Generate Response Curves in MMM" - [Medium](https://medium.com/data-science/exploring-different-approaches-to-generate-response-curves-in-marketing-mix-modeling-ff6dcc7927f7)
    
    - Comparison of saturation functions
    - Visual intuition

### Key Mathematical Concepts

**Geometric Adstock**:

```
At = Tt + λ * At-1
where λ ∈ (0, 0.95) is decay parameter
```

**Delayed Geometric**:

```
Allows peak effect after lag period
```

**Weibull Adstock**:

```
Flexible shape parameter
Used in advanced implementations
```

**Hill Saturation**:

```
y = α * x^s / (K^s + x^s)
where:
- α = ceiling (maximum response)
- s = shape (steepness)
- K = half-saturation point
```

### Typical Adstock Decay by Channel

(from Meta Robyn guidelines)

- **TV**: 0.3–0.8
- **OOH/Print/Radio**: 0.1–0.4
- **Digital**: 0.0–0.3
- **Social Media**: 0.0–0.3
- **Search**: 0.0–0.1 (very short decay)

### Practical Exercises

- Implement geometric adstock transformation
- Fit Hill saturation curves to simulated data
- Compare different decay rates visually
- Calculate half-life of advertising effects

### Action Items

- [ ] Read Franses "Adstock revisited"
- [ ] Read Google Meridian saturation docs
- [ ] Code adstock transformations in Python
- [ ] Visualize response curves for your channels
- [ ] Estimate appropriate decay ranges for your media

## Weeks 3-4: Core MMM Modeling

### Frequentist vs. Bayesian Approaches

**Frequentist** (Traditional):

- Point estimates only
- No uncertainty quantification
- Faster for simple models
- Less flexible

**Bayesian** (Modern Default):

- Full posterior distributions
- Natural uncertainty quantification
- Incorporates prior knowledge
- Better for optimization under uncertainty
- **Use this for production systems**

### Three Production-Ready Frameworks

#### 1. Meta Robyn ([[r programming|R]]-based)

**Characteristics**:

- Ridge regression + multi-objective optimization
- Hyperparameter search via Nevergrad
- Prophet for trend/seasonality decomposition
- Production-hardened, strong diagnostics
- Automated model selection
- Built-in budget allocator

**Key Features**:

- Multi-touch attribution integration
- GeoLift calibration support
- Response curve visualization
- Pareto frontier optimization

**When to Use**:

- Quick production deployment
- Team familiar with R
- Need automated workflows
- Want proven, battle-tested solution

**Essential Resources**:

- **Meta Robyn GitHub & Docs** - [facebookexperimental.github.io](https://facebookexperimental.github.io/Robyn/)
- **"An Introduction to Robyn's Open-Source Approach"** - [arXiv](https://arxiv.org/abs/2403.14674)
- Robyn example notebooks and datasets

#### 2. Google LightweightMMM ([[python]])

**Characteristics**:

- Bayesian via PyMC/NumPyro
- MCMC sampling (NUTS)
- Explicit prior specifications
- Clean, minimal API

**Key Features**:

- Hierarchical geo-level modeling
- Posterior predictive checks
- Adstock + saturation built-in
- Good for learning Bayesian concepts

**When to Use**:

- Python environment
- Want full Bayesian treatment
- Building custom models
- Educational/research purposes

**Status**: Note that **Google Meridian** is the successor (released 2024), but LightweightMMM still valuable for learning

**Essential Resources**:

- **LightweightMMM GitHub** - [github.com/google/lightweight_mmm](https://github.com/google/lightweight_mmm)
- Code walkthrough and notebooks
- "Understanding Bayesian Marketing Mix Modeling" - Towards Data Science

#### 3. PyMC-Marketing ([[python]])

**Characteristics**:

- Most flexible Bayesian framework
- Built on PyMC ecosystem
- Time-varying coefficients
- Advanced diagnostics

**Key Features**:

- Complete MMM module with budget optimizer
- Causal inference wrappers
- Extensive posterior analysis tools
- Active development, strong community
- Integration with ArviZ for diagnostics

**When to Use**:

- Need maximum flexibility
- Custom model requirements
- Advanced Bayesian modeling
- **End-to-end Bayesian pipeline in [[python]]**

**Essential Resources**:

- **PyMC-Marketing Documentation** - [pymc-marketing.io](https://www.pymc-marketing.io/en/stable/api/generated/pymc_marketing.mmm.html)
- MMM example notebook - [Link](https://www.pymc-marketing.io/en/stable/notebooks/mmm/mmm_example.html)
- Budget optimization API documentation
- PyMC Discourse community

### Learning Path for Weeks 3-4

**Week 3: Robyn Deep Dive**

- Install and setup Robyn
- Work through official tutorials
- Run on demo dataset
- Understand hyperparameter optimization
- Generate response curves and budget allocation

**Week 4: Python Bayesian MMM**

- Setup LightweightMMM or PyMC-Marketing
- Understand prior specification
- Run MCMC sampling
- Perform posterior predictive checks
- Compare with Robyn results

### Practical Exercises

**Exercise 1: Robyn Implementation**

```r
# Setup, data prep, model run
# Hyperparameter optimization
# Model selection via Pareto frontier
# Response curve analysis
# Budget optimization
```

**Exercise 2: PyMC-Marketing Implementation**

```python
# Prior specification
# Model definition with adstock + saturation
# MCMC sampling with diagnostics
# Posterior analysis
# Budget optimization under constraints
```

### Key Concepts to Master

- Bayesian priors and posteriors
- MCMC convergence diagnostics (R-hat, ESS)
- Hyperparameter vs. model parameters
- Model selection criteria (Pareto optimality, DIC, WAIC)
- Credible intervals vs. confidence intervals

### Action Items

- [ ] Install Robyn and dependencies
- [ ] Complete Robyn quickstart tutorial
- [ ] Install PyMC-Marketing
- [ ] Run both frameworks on same demo data
- [ ] Document differences in outputs
- [ ] Create comparison matrix of frameworks

## Weeks 5-6: Causal Identification & Incrementality

### The Observational Problem

**Key Challenge**: MMM uses observational data, not randomized experiments

- Correlation ≠ causation
- Confounding variables
- Endogeneity issues
- Selection bias

**Solution**: Pair MMM with experiments to:

1. Pin down priors (Bayesian calibration)
2. Validate elasticity estimates
3. Ground-truth lift measurements
4. Build stakeholder confidence

### Geo-Based Experiments

#### Meta GeoLift: Synthetic Control at Geo Level

**What It Is**:

- Synthetic control method for geo experiments
- Matched market testing
- Power calculations pre-launch
- Post-campaign lift measurement

**Key Concepts**:

- Treatment vs. control geos
- Synthetic control weighting
- Minimum detectable lift (MDL)
- Pre-period validation

**Use Cases in CPG**:

- TV market testing
- Retail media incrementality
- Regional promotional lifts
- Distribution expansion tests

**Essential Resources**:

- **GeoLift Documentation** - [facebookincubator.github.io/GeoLift](https://facebookincubator.github.io/GeoLift/)
- **"Welcome to GeoLift"** intro guide - [Docs](https://facebookincubator.github.io/GeoLift/docs/intro/)
- GitHub repo with examples
- Integration with Robyn for calibration

#### Bayesian Structural Time Series (BSTS)

**What It Is**:

- CausalImpact framework
- Time-series counterfactual estimation
- Useful for single-treatment lifts

**Use Cases**:

- Campaign launch impact
- Channel pause tests
- Budget shift experiments

**Essential Resources**:

- PyMC-Marketing BSTS implementation - [Docs](https://www.pymc-marketing.io/en/stable/notebooks/mmm/mmm_example.html)
- CausalImpact R package (Google)
- "Inferring causal impact using Bayesian structural time-series models"

### Privacy and Signal Loss Context

**Why MMM Matters More in 2025**:

- ATT (App Tracking Transparency) impact
- Third-party cookie deprecation
- GDPR/CCPA regulations
- Walled garden fragmentation

**Implications**:

- Attribution models breaking down
- User-level tracking disappearing
- MMM as privacy-safe alternative
- Aggregate-level measurement rising

**Essential Reading**:

- "Marketing & Measuring In Light of iOS Privacy" - [Prescient AI](https://prescientai.com/blog/marketing-measuring-after-ios-privacy)
- "The comeback of the marketing mix model" (2025 trends)
- eMarketer reports on measurement shifts

### Integrating Experiments with MMM

**Workflow**:

1. **Design** geo experiment using GeoLift power calculations
2. **Run** experiment in treatment vs. control markets
3. **Measure** lift with synthetic control
4. **Calibrate** MMM priors using experiment results
5. **Validate** MMM elasticities against experiments
6. **Iterate** quarterly with new experiments

**Calibration Methods**:

- Use experiment lifts as priors in Bayesian MMM
- Constrain effect sizes to match experiments
- Weight recent experiments more heavily
- Document calibration in model governance

### Practical Exercises

**Exercise 1: GeoLift Power Analysis**

- Define treatment/control geos
- Calculate minimum detectable lift
- Run synthetic control matching
- Validate pre-period fit

**Exercise 2: MMM Calibration**

- Take experiment lift result
- Specify Bayesian prior around that lift
- Re-run MMM with calibrated priors
- Compare uncalibrated vs. calibrated

**Exercise 3: Validation Framework**

- Design quarterly experiment calendar
- Map experiments to MMM channels
- Create experiment registry
- Build validation dashboard

### Action Items

- [ ] Complete GeoLift tutorial
- [ ] Design one geo experiment for your business
- [ ] Calculate power and MDL
- [ ] Read privacy measurement papers
- [ ] Create experiment-MMM integration plan
- [ ] Draft experiment playbook template

## Week 7: Retail Media Networks & Clean Rooms for CPG

### The Retail Media Revolution

**What Are Retail Media Networks (RMNs)?**:

- Advertising on retailer platforms (Amazon, Walmart, Target)
- First-party retailer data for targeting
- Closed-loop measurement (purchase data)
- Fastest-growing ad channel in CPG

**Key RMNs for CPG**:

- Amazon Advertising (dominant)
- Walmart Connect
- Target Roundel
- Kroger Precision Marketing
- Instacart Ads

### Why RMNs Matter for MMM

**Challenges**:

- Walled gardens with limited data export
- Inconsistent measurement standards
- Attribution complexity
- Data integration difficulties

**2025 Trend**: RMNs adding MMM-ready data feeds

- Standardized exports
- Geo-level aggregation
- Privacy-compliant feeds
- Direct API access

**Essential Reading**:

- "2025 trend: Retail media networks wade into unfamiliar waters" - [eMarketer](https://www.emarketer.com/content/2025-trend-retail-media-networks-unfamiliar-waters-satisfy-advertiser-demands-incrementality)
- "2025 Retail Media Market Guide" - [RMIQ](https://www.rmiq.net/blog/retail-media-guide/)

### Amazon Marketing Cloud (AMC)

**What It Is**:

- Clean room solution on [[amazon web services|AWS]] Clean Rooms
- [[sql]]-based analysis environment
- Aggregated, privacy-safe queries
- Cross-channel attribution

**Key Capabilities**:

- Path-to-purchase analysis
- Audience overlap studies
- Frequency and reach
- Incrementality measurement
- Integration with non-Amazon data

**Setup Requirements**:

- AMC instance provisioning
- [[sql]] query expertise
- Data schema understanding
- Privacy compliance knowledge

**Essential Resources**:

- **Amazon Marketing Cloud Documentation** - [Amazon Ads](https://advertising.amazon.com/API/docs/en-us/guides/amazon-marketing-cloud/acr/1_overview)
- AMC certification program
- SQL query templates
- Clean room concepts guide

### Data Integration Strategy

**What You Must Ingest**:

1. **Amazon Ads**:
    
    - Sponsored Products/Brands/Display spend
    - Impressions, clicks, conversions
    - ACOS, ROAS metrics
    - Geo-level if available
2. **Other RMNs**:
    
    - Standardized metrics across platforms
    - Weekly or daily granularity
    - Campaign-level details
3. **Clean Room Outputs**:
    
    - AMC query results
    - Aggregated audience insights
    - Attribution weights

**Harmonization Challenges**:

- Different metrics definitions
- Varying time zones
- Attribution window differences
- Geo granularity mismatches

### Building RMN-Ready MMM

**[[data pipeline|Data Pipeline]] Requirements**:

- Automated daily/weekly pulls
- Transformation to MMM grain (weekly)
- [[data quality]] checks for [[data validation]]
- Version-controlled processing

**Modeling Considerations**:

- Separate RMN channels from other digital
- Account for closed-loop nature
- Model retailer-specific effects
- Include distribution as control

**[[data governance|Governance]]**:

- Data sharing agreements
- Privacy compliance checks
- Access controls
- Audit trails

### Practical Exercises

**Exercise 1: AMC [[sql|Query Building]]**

- Write [[sql]] for path analysis
- Calculate reach/frequency
- Export for MMM integration

**Exercise 2: RMN [[data pipeline|Data Pipeline]]**

- Design [[etl]] for multiple RMNs
- Harmonize to common schema
- Create QA dashboard

**Exercise 3: RMN MMM Module**

- Add RMN channels to existing MMM
- Model retailer-specific effects
- Optimize RMN budget allocation

### Action Items

- [ ] Map current RMN investments
- [ ] Request data access from RMN partners
- [ ] Complete AMC certification
- [ ] Build RMN data integration pipeline
- [ ] Design RMN measurement strategy
- [ ] Document RMN-specific model considerations

## Week 8: Optimization & Decisioning

### Budget Allocation Under Uncertainty

**Core Principle**: Use Bayesian posterior draws to optimize expected profit subject to constraints

**Why Bayesian?**:

- Incorporates uncertainty naturally
- Multiple scenarios from posterior
- Risk-adjusted decisions
- Credible intervals for recommendations

### Optimization Frameworks

#### Response Curve Optimization

**Concept**: Find budget allocation that maximizes response along fitted curves

**Methods**:

1. **Gradient-based** (when curves are smooth)
2. **Genetic algorithms** (Robyn approach)
3. **Bayesian optimization** (when expensive to evaluate)
4. **Linear programming** (convex cases)

#### Key Metrics

**Average ROI vs. Marginal ROI**:

- **Average ROI**: Total return / total spend
- **Marginal ROI**: Additional return from next dollar
- **Optimize on marginal, report average**

**Expected Profit**:

```
E[Profit] = E[Revenue] - Total Spend - Fixed Costs
```

**Risk Metrics**:

- Value at Risk (VaR)
- Expected shortfall
- Probability of meeting targets

### Constraint Types

**Business Constraints**:

1. **Total Budget**: $100K per quarter
2. **Channel Minimums**: At least $5K per channel
3. **Channel Maximums**: No more than 40% in any channel
4. **Change Limits**: ±30% vs. historical spend
5. **Flight Windows**: Minimum run periods
6. **Geo Requirements**: Regional balance

**Strategic Constraints**:

- Brand vs. performance balance
- Long-term vs. short-term split
- Test budget allocation (10-15%)
- Competitive response limits

### Implementation: Robyn Budget Allocator

**How It Works**:

- Takes calibrated MMM results
- Simulates budget scenarios
- Optimizes via Nevergrad
- Returns Pareto-optimal allocations

**Two Scenarios**:

1. **Max Response**: Given budget, maximize KPI
2. **Target Efficiency**: Reach target with minimum spend

**Key Outputs**:

- Optimal spend by channel
- Expected lift vs. baseline
- Response curves with current/optimal points
- Decomposition of effects

**Usage**:

```r
robyn_allocator(
  robyn_object = robyn_model,
  scenario = "max_response",
  total_budget = 100000,
  channel_constr_low = 0.7,  # -30%
  channel_constr_up = 1.3     # +30%
)
```

**Essential Resource**:

- Robyn allocator documentation - [Robyn Docs](https://facebookexperimental.github.io/Robyn/)

### Implementation: PyMC-Marketing Budget Optimizer

**How It Works**:

- Uses posterior draws from MMM
- Constraint-based optimization
- Multiple objectives supported
- Uncertainty propagation

**Key Features**:

- Custom objective functions
- Flexible constraints
- Scenario comparison
- Risk analysis

**Usage**:

```python
from pymc_marketing.mmm import BudgetOptimizer

optimizer = BudgetOptimizer(mmm_model)
optimal_allocation = optimizer.optimize(
    total_budget=100000,
    constraints={
        "tv": (0.7, 1.3),
        "digital": (0.7, 1.3)
    }
)
```

**Essential Resources**:

- PyMC-Marketing Budget Optimization docs - [pymc-marketing.io](https://www.pymc-marketing.io/en/stable/api/generated/pymc_marketing.mmm.html)
- Example notebooks

### Scenario Planning Workflow

**Step 1: Define Scenarios**

- **Base Case**: Current spend allocation
- **Optimized**: Algorithm recommendation
- **Conservative**: ±15% changes only
- **Aggressive**: ±50% changes allowed
- **What-If**: Specific strategic shifts

**Step 2: Run Simulations**

- Pull N samples from posterior (e.g., 1000)
- Optimize each sample
- Aggregate results

**Step 3: Risk Analysis**

- Calculate percentiles (10th, 50th, 90th)
- Identify downside risks
- Assess probability of meeting targets

**Step 4: Create Decision Packages**

- Multiple options for CFO
- Risk-return tradeoffs
- Sensitivity analysis
- Downside protection

### [[business intelligence|Executive-Ready Outputs]]

**CFO Memo Template**:

1. **Executive Summary**: Recommendation in 3 bullets
2. **Current Performance**: Historical ROI by channel
3. **Optimization Results**: Table of scenarios
4. **Expected Impact**: Revenue lift with credible intervals
5. **Risk Assessment**: Downside scenarios
6. **Implementation Plan**: Timeline and dependencies
7. **Validation**: How we'll measure success

**Visualization Best Practices**:

- Response curves with current/optimal markers
- Waterfall chart of reallocation
- Scenario comparison table
- Risk distributions (violin plots)
- Before/after allocation pie charts

### Practical Exercises

**Exercise 1: Robyn Optimization**

- Run allocator on demo model
- Compare max response vs. target scenarios
- Vary constraints and observe changes
- Document optimal allocation

**Exercise 2: PyMC-Marketing Optimization**

- Implement custom objective function
- Add business constraints
- Run scenario analysis
- Visualize uncertainty

**Exercise 3: CFO Decision Package**

- Create 3 scenarios with different risk profiles
- Calculate expected profit and downside risk
- Build executive presentation
- Practice stakeholder communication

### Action Items

- [ ] Implement both Robyn and PyMC-Marketing optimizers
- [ ] Define business constraints for your company
- [ ] Build scenario planning framework
- [ ] Create CFO memo template
- [ ] Design risk analysis dashboard
- [ ] Document optimization assumptions and limitations

## Week 9: CPG [[data engineering|Data Engineering]] for MMM

### Data Requirements: The Complete Stack

**Core Principle**: Align all data to weekly grain with consistent lagging, [[data quality|QA checks]], and gold-standard tables

### Required Data Tables

#### 1. Sales Data (Dependent Variable)

**Weekly Sales by Brand/SKU**:

- Revenue or units sold
- Multiple products/SKUs if portfolio
- Regional splits if modeling hierarchically
- Retailer-level if available (and strategic)

**Sources**:

- Internal sales systems
- Nielsen/IRI scanner data (stored in [[data warehouse]])
- Retailer POS data
- Circana (formerly IRI) data

**Schema** ([[data modeling]]):

```
week_start_date | brand | sku | region | retailer | units | revenue | market_share
```

#### 2. Media Spend & Exposure

**Digital Channels**:

- Spend, impressions, clicks by week
- Platform: Facebook, Google, TikTok, etc.
- Campaign/ad set level detail
- Geographic splits if available

**Traditional Channels**:

- TV: Spend + GRPs (Gross Rating Points)
- Radio: Spend + GRPs
- OOH (Out of Home): Spend + impressions
- Print: Spend + circulation

**Retail Media**:

- Amazon Ads (Sponsored Products/Brands/Display)
- Walmart Connect
- Other RMNs
- Separate from general digital

**Schema**:

```
week_start_date | channel | campaign | spend | impressions | clicks | region
```

#### 3. Price & Promotions

**Base Price**:

- Regular shelf price by SKU/week
- Account for inflation if multi-year

**Promotional Price**:

- Discounted price during promotions
- Promotion type: TPR, BOGO, % off, etc.
- Promotion depth: % discount
- Promotional timing and duration

**Price Indices**:

- Own price relative to base
- Competitive price indices
- Price gaps vs. competitors

**Schema** ([[data modeling]]):

```
week_start_date | sku | region | base_price | promo_price | promo_type | promo_depth | promo_flag
```

#### 4. Distribution & Availability

**Weighted Distribution**:

- % of stores carrying product
- Weighted by store volume (ACV)
- Critical for new product launches

**Numeric Distribution**:

- Simple count of stores
- Less preferred than weighted

**Out-of-Stock Rates**:

- Availability at shelf
- Impacts sales directly

**Schema** ([[data modeling]]):

```
week_start_date | sku | region | weighted_dist | numeric_dist | oos_rate
```

#### 5. Trade Spend

**Co-op Advertising**:

- Retailer-funded marketing
- Must separate from brand spend

**Slotting Fees**:

- One-time payments for shelf space
- Amortize over relevant period

**Other Trade**:

- Display fees
- Promotional allowances

**Schema** ([[data modeling]]):

```
week_start_date | retailer | trade_type | amount
```

#### 6. Competitor Data

**Competitive Spend**:

- Estimated via Kantar or similar
- Share of voice (SOV)

**Competitive Pricing**:

- Shelf prices of key competitors
- Price indices

**Competitive Promotions**:

- Promotion frequency and depth
- Timing of major campaigns

**Schema**:

```
week_start_date | competitor | channel | est_spend | price_index | promo_flag
```

#### 7. Seasonality & Calendar

**Holidays**:

- National holidays
- Religious holidays (regional)
- School breaks
- Major shopping events (Black Friday, Prime Day)

**Events**:

- Product launches
- PR events
- Sponsorships
- Corporate events

**Day of Week Effects**:

- If modeling daily, not weekly

**Schema**:

```
week_start_date | holiday_name | event_name | holiday_flag | event_flag
```

#### 8. Macro & External Factors

**Economic Indicators**:

- Consumer confidence index
- Unemployment rate
- Gas prices (for some CPG categories)
- Inflation rates

**Weather**:

- Temperature by region
- Precipitation
- Extreme events
- Relevant for seasonal products

**COVID/Pandemic**:

- Lockdown indicators
- Mobility indices
- Category-specific shocks

**Schema**:

```
week_start_date | region | temp_avg | precip | unemployment_rate | consumer_confidence
```

### Data Engineering Best Practices

#### [[medallion architecture|Gold Table Architecture]]

**Principle**: One source of truth for MMM inputs

**Structure**:

```
mmm_gold_weekly
├── week_start_date (Monday)
├── sales_revenue
├── sales_units
├── tv_spend
├── tv_grps
├── digital_spend
├── digital_impressions
├── ... (all media channels)
├── base_price
├── promo_depth
├── promo_flag_bogo
├── promo_flag_pctoff
├── weighted_distribution
├── comp_sov
├── holiday_flag
├── temperature
└── ... (all control variables)
```

**Requirements**:

- Weekly grain (Monday start recommended)
- No nulls (forward-fill or interpolate)
- Consistent units (don't mix thousands and millions)
- Documented transformations with [[data governance]]
- Version controlled with [[data quality]] checks

#### Lagged Variables & Adstock

**Pre-compute Adstock** ([[python]]):

```python
def geometric_adstock(x, decay):
    """Apply geometric adstock transformation"""
    adstocked = np.zeros_like(x)
    adstocked[0] = x[0]
    for i in range(1, len(x)):
        adstocked[i] = x[i] + decay * adstocked[i-1]
    return adstocked

# Create adstocked versions
df['tv_adstock_30'] = geometric_adstock(df['tv_spend'], 0.3)
df['tv_adstock_50'] = geometric_adstock(df['tv_spend'], 0.5)
df['tv_adstock_70'] = geometric_adstock(df['tv_spend'], 0.7)
```