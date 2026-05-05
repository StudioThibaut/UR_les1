export const event = ({ action, category, label }: {
  action: string
  category: string
  label: string
}) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", action, {
      event_category: category,
      event_label: label,
    })
    console.log(`[GA] ${action} → ${label}`)
  }
}