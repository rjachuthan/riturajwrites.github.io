---
title: App Data Across Different OS's
description: ""
aliases: [App Data Across Different OS's]
tags: [🌱seedling]
draft: true
date: 2025-05-24
backlink:
  - "[[operating system]]"
---



| Purpose              | Windows Path                                          | macOS Path                                                       | Linux (XDG) Path                                                    | Notes                                            |
| -------------------- | ----------------------------------------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------ |
| App Data (Roaming)   | `C:\Users\<user>\AppData\Roaming\<AppName>`           | `~/Library/Application Support/<AppName>`                        | `$XDG_DATA_HOME/<AppName>`<br>(default: `~/.local/share/<AppName>`) | For configs, settings, user-level data           |
| App Data (Local)     | `C:\Users\<user>\AppData\Local\<AppName>`             | `~/Library/Application Support/<AppName>` (no strict equivalent) | `$XDG_DATA_HOME/<AppName>`<br>(default: `~/.local/share/<AppName>`) | For local-only, large, or machine-specific files |
| Preferences/Settings | `.ini` or registry, often in Roaming                  | `~/Library/Preferences/<com.company.AppName>.plist`              | `$XDG_CONFIG_HOME/<AppName>`<br>(default: `~/.config/<AppName>`)    | App preferences, configs, state                  |
| Cache                | `C:\Users\<user>\AppData\Local\<AppName>\Cache\`      | `~/Library/Caches/<AppName>`                                     | `$XDG_CACHE_HOME/<AppName>`<br>(default: `~/.cache/<AppName>`)      | Temporary or re-creatable files                  |
| Logs                 | `C:\Users\<user>\AppData\Local\<AppName>\Logs\`       | `~/Library/Logs/<AppName>`                                       | `$XDG_STATE_HOME/<AppName>/logs`<br>(default: `~/.local/state/`)    | Runtime logs, diagnostics, error reports         |
| Saved State          | `C:\Users\<user>\AppData\Local\<AppName>\SavedState\` | `~/Library/Saved Application State/<AppName>.savedState/`        | No strict standard; use `$XDG_STATE_HOME/<AppName>` if needed       | Restore session/UI after relaunch                |

## Notes

- `$XDG_DATA_HOME` default: `~/.local/share/`
- `$XDG_CONFIG_HOME` default: `~/.config/`
- `$XDG_CACHE_HOME` default: `~/.cache/`
- `$XDG_STATE_HOME` default: `~/.local/state/`

## Wayland Notes

Wayland does not change the XDG directory structure. However, sandboxed apps (Flatpak, Snap) may use:

- `~/.var/app/<AppID>/config/`
- `~/.var/app/<AppID>/data/`

These follow XDG principles but in isolated user namespaces.
