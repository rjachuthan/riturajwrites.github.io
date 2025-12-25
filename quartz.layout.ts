import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/rjachuthan",
      LinkedIn: "https://www.linkedin.com/in/riturajachuthan/",
      RSS: "https://riturajwrites.xyz/sitemap.xml"
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Darkmode()),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    // Component.DesktopOnly(Component.Explorer()),
    Component.DesktopOnly(
      Component.RecentNotes({
        title: "Recent Posts",
        limit: 6,
        filter: (f) => f.slug!.startsWith("posts"),
      }),
    ),
  ],
  right: [
    Component.DesktopOnly(Component.Darkmode()),
    Component.Graph({
      localGraph: { showTags: true, },
      globalGraph: { showTags: true, },
    }),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
    Component.MobileOnly(Component.RecentNotes()),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Darkmode(),
    Component.Search(),
    // Component.DesktopOnly(Component.Explorer()),
    Component.DesktopOnly(
      Component.RecentNotes({
        title: "Recent",
        limit: 5,
        filter: (f) => !f.slug!.startsWith("content/"),
      }),
    ),
  ],
  right: [],
}
