---
name: Figma Operations
description: Skill for interacting with the Figma MCP server to extract design context, components, tokens, and styles.
version: 1
---

# Skill: Figma Operations

## Objective
Provide agents with the ability to interact with Figma designs via the Figma MCP server. This skill covers connecting to Figma, extracting design data, and translating it into actionable development artifacts.

## Prerequisites
- Figma MCP server configured in the IDE (run `agent-hub mcp` and select **Figma**)
- Figma Personal Access Token with read access to the target files
- Node.js 18+

## Available MCP Tools

The Figma MCP server exposes the following tools via `figma-mcp-server/*`:

### File & Node Operations
| Tool | Description | Key Parameters |
|------|-------------|----------------|
| `get_file` | Fetch entire Figma file structure | `file_key` |
| `get_file_nodes` | Fetch specific nodes from a file | `file_key`, `ids` (comma-separated node IDs) |
| `get_images` | Export nodes as PNG/SVG/PDF | `file_key`, `ids`, `format`, `scale` |

### Design System Operations
| Tool | Description | Key Parameters |
|------|-------------|----------------|
| `get_file_styles` | List all published styles (colors, text, effects) | `file_key` |
| `get_file_components` | List all published components and variants | `file_key` |
| `get_local_variables` | Fetch design token variables (colors, spacing, typography) | `file_key` |
| `get_local_variable_collections` | Fetch variable collections (modes/themes) | `file_key` |

### Code Connect
| Tool | Description | Key Parameters |
|------|-------------|----------------|
| `get_code_connect` | Retrieve Code Connect mappings for components | `file_key` |

## Recipe

### 1. Extract the File Key
From a Figma URL like `https://www.figma.com/design/ABC123xyz/My-Design`, the file key is `ABC123xyz`.

```
URL pattern: https://www.figma.com/design/{file_key}/{file_name}
Node pattern: https://www.figma.com/design/{file_key}/{file_name}?node-id={node_id}
```

### 2. Fetch Design Context
```
1. Call `get_file` with the file_key to understand the page/frame structure
2. Identify the target frame node IDs from the response
3. Call `get_file_nodes` with specific node IDs to get detailed layout data
```

### 3. Extract Design Tokens
```
1. Call `get_local_variables` to fetch all design variables
2. Call `get_local_variable_collections` to understand modes (light/dark, brand variants)
3. Map Figma variables to CSS custom properties or framework config
```

### 4. Extract Component Metadata
```
1. Call `get_file_components` to list all published components
2. For each component, note: name, description, variant properties, constraints
3. Map component variants to code props/enums
```

### 5. Export Assets
```
1. Identify icon/image nodes from the frame structure
2. Call `get_images` with format=svg for icons, format=png (scale=2) for raster images
3. Save exported assets to the appropriate project directory
```

## Rate Limiting
- Figma API has rate limits based on plan tier
- Free/Starter: ~30 requests/minute
- Professional/Organization: higher limits
- Always batch node requests using comma-separated IDs where possible

## Common Pitfalls
- **Missing auto-layout**: Some Figma frames use absolute positioning instead of auto-layout; these don't map cleanly to Flexbox/Grid
- **Raster vs vector**: Always prefer SVG exports for icons/illustrations
- **Variable scoping**: Figma variable modes (light/dark) should map to CSS custom property overrides, not separate token files
- **Component naming**: Figma uses `/` as a separator for component groups (e.g., `Button/Primary/Large`) — map these to component variants, not separate components

## Validation
- Can you extract the file key from a Figma URL?
- Can you list all components and their variants?
- Can you extract design tokens and map them to CSS custom properties?