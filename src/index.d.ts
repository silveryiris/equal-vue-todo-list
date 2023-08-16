export type ComponentVariant =
  | "default"
  | "primary"
  | "secondary"
  | "accent"
  | "success"
  | "warning"
  | "info"
  | "error"

export type ComponentSize = "default" | "lg" | "md" | "sm" | "xs"

declare module "*.md" {
  import type { ComponentOptions } from "vue"
  const Component: ComponentOptions
  export default Component
}
