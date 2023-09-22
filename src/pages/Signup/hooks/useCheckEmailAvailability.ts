export const useCheckEmailAvailability = () => {
  type Body = {
    email: string
    is_available: boolean
  }

  const checkEmailAvailability = async (email: string) => {
    const res = await fetch(`${import.meta.env.VITE_API_PATH}/api/email-check`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    })
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { is_available  }: Body = await res.json()
    return is_available
  }

  return { checkEmailAvailability }
}