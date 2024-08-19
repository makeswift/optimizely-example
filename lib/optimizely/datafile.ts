export async function getOptimizelyDatafile() {
  const fetchedDatafile = await fetch(
    `https://cdn.optimizely.com/datafiles/${process.env.NEXT_PUBLIC_OPTIMIZELY_SDK_KEY}.json`,
    { next: { revalidate: 3600 } }
  )
  const datafile = await fetchedDatafile.json()

  return datafile
}
