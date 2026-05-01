import React, { Suspense, lazy, useState } from 'react'
import styles from './App.module.css'

// ── Remote components (lazy-loaded at runtime from other servers) ────────────
//
// At build time these imports are just type-checked stubs (remotes.d.ts).
// At runtime the browser fetches remoteEntry.js from the respective port
// and streams back just the JS chunk for this component.
//
const ProductTable = lazy(() => import('remoteA/ProductTable'))
const KpiCard      = lazy(() => import('remoteB/KpiCard'))
const SalesChart   = lazy(() => import('remoteB/SalesChart'))
const RecentOrders = lazy(() => import('remoteB/RecentOrders'))

// ── Error boundary: if a remote is down, show a graceful message ─────────────
class RemoteErrorBoundary extends React.Component<
  { name: string; children: React.ReactNode },
  { error: Error | null }
> {
  state = { error: null }
  static getDerivedStateFromError(e: Error) { return { error: e } }
  render() {
    if (this.state.error) {
      return (
        <div className={styles.errorBox}>
          <strong>Could not load {this.props.name}</strong>
          Is the remote running? Check that the dev server on the expected port is up.
        </div>
      )
    }
    return this.props.children
  }
}

// ── Thin loading skeleton ─────────────────────────────────────────────────────
function Skeleton({ height = 120 }: { height?: number }) {
  return (
    <div style={{
      height,
      background: 'linear-gradient(90deg, #f3f4f6 25%, #e9eaec 50%, #f3f4f6 75%)',
      backgroundSize: '400% 100%',
      animation: 'shimmer 1.4s ease infinite',
      borderRadius: 10,
    }} />
  )
}

// ── Shell-owned nav ───────────────────────────────────────────────────────────
type Page = 'overview' | 'inventory' | 'orders'

function Nav({ page, setPage }: { page: Page; setPage: (p: Page) => void }) {
  return (
    <nav className={styles.nav}>
      <div className={styles.navBrand}>
        <span className={styles.navBrandDot} />
        Acme Dashboard
      </div>
      <div className={styles.navLinks}>
        {(['overview', 'inventory', 'orders'] as Page[]).map(p => (
          <button
            key={p}
            className={`${styles.navLink} ${page === p ? styles.active : ''}`}
            onClick={() => setPage(p)}
          >
            {p.charAt(0).toUpperCase() + p.slice(1)}
          </button>
        ))}
      </div>
      <span className={styles.navTag}>shell · :5173</span>
    </nav>
  )
}

// ── Root app ──────────────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState<Page>('overview')

  return (
    <>
      {/* Shimmer animation injected once by the host */}
      <style>{`
        @keyframes shimmer {
          0%   { background-position: 100% 0 }
          100% { background-position: -100% 0 }
        }
      `}</style>

      <div className={styles.shell}>
        {/* Nav is shell-owned — always present, no remote needed */}
        <Nav page={page} setPage={setPage} />

        <main className={styles.page}>
          <div className={styles.pageHeader}>
            <h1 className={styles.pageTitle}>
              {page === 'overview'   && 'Overview'}
              {page === 'inventory'  && 'Inventory'}
              {page === 'orders'     && 'Orders'}
            </h1>
            <p className={styles.pageSubtitle}>
              Coloured badges show which micro-frontend rendered each section.
            </p>
          </div>

          {/* Legend — shows the origin of each coloured block */}
          <div className={styles.originLegend}>
            <span className={styles.originItem}>
              <span className={styles.originDot} style={{ background: '#6b7280' }} />
              Shell (host) — nav, layout, routing
            </span>
            <span className={styles.originItem}>
              <span className={styles.originDot} style={{ background: '#0f6e56' }} />
              Remote A (:5174) — Inventory
            </span>
            <span className={styles.originItem}>
              <span className={styles.originDot} style={{ background: '#534ab7' }} />
              Remote B (:5175) — Analytics
            </span>
          </div>

          {/* ── Overview page ─────────────────────────────────────────── */}
          {page === 'overview' && (
            <>
              <div className={styles.kpiRow}>
                {/* Three KPI cards — all from Remote B */}
                {[
                  { label: 'Revenue · 30d',    value: '$84,210', trend: '+12.4%', positive: true  },
                  { label: 'Orders · 30d',     value: '1,284',   trend: '+8.1%',  positive: true  },
                  { label: 'Avg. order value', value: '$65.58',  trend: '-2.3%',  positive: false },
                ].map(kpi => (
                  <RemoteErrorBoundary key={kpi.label} name="KpiCard (remote-b)">
                    <Suspense fallback={<Skeleton height={104} />}>
                      <KpiCard {...kpi} />
                    </Suspense>
                  </RemoteErrorBoundary>
                ))}
              </div>

              <div className={styles.chartsRow}>
                <RemoteErrorBoundary name="SalesChart (remote-b)">
                  <Suspense fallback={<Skeleton height={220} />}>
                    <SalesChart />
                  </Suspense>
                </RemoteErrorBoundary>
              </div>

              <div className={styles.ordersSection}>
                <RemoteErrorBoundary name="RecentOrders (remote-b)">
                  <Suspense fallback={<Skeleton height={200} />}>
                    <RecentOrders />
                  </Suspense>
                </RemoteErrorBoundary>
              </div>
            </>
          )}

          {/* ── Inventory page ─────────────────────────────────────────── */}
          {page === 'inventory' && (
            <div className={styles.tableSection}>
              <RemoteErrorBoundary name="ProductTable (remote-a)">
                <Suspense fallback={<Skeleton height={280} />}>
                  <ProductTable />
                </Suspense>
              </RemoteErrorBoundary>
            </div>
          )}

          {/* ── Orders page ────────────────────────────────────────────── */}
          {page === 'orders' && (
            <>
              <div className={styles.kpiRow}>
                {[
                  { label: 'Pending',   value: '12',  trend: '+3',   positive: false },
                  { label: 'Shipped',   value: '84',  trend: '+18%', positive: true  },
                  { label: 'Delivered', value: '1,188', trend: '+9%', positive: true  },
                ].map(kpi => (
                  <RemoteErrorBoundary key={kpi.label} name="KpiCard (remote-b)">
                    <Suspense fallback={<Skeleton height={104} />}>
                      <KpiCard {...kpi} />
                    </Suspense>
                  </RemoteErrorBoundary>
                ))}
              </div>
              <div className={styles.ordersSection}>
                <RemoteErrorBoundary name="RecentOrders (remote-b)">
                  <Suspense fallback={<Skeleton height={200} />}>
                    <RecentOrders />
                  </Suspense>
                </RemoteErrorBoundary>
              </div>
            </>
          )}
        </main>
      </div>
    </>
  )
}
