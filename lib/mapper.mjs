export const mapper = (activity) => {
  const accessibility = activity.accessibility <= 0.25
    ? 'High'
    : (activity.accessibility <= 0.75 ? 'Medium' : 'Low')
  const price = activity.price === 0
    ? 'Free'
    : (activity.price <= 0.5 ? 'Low' : 'High')
  return { ...activity, accessibility, price }
}
