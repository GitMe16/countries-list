export async function listCountries(): Promise<unknown> {
  try {
    const response = await fetch(
      'https://restcountries.eu/rest/v2/all'
    )
    if (response.ok) {
      return response.json()
    }
  } catch (err) {
    console.error(err)
    return err
  }
}
