export const useCheckDuplicateEmail = () => {
  type Body = {
    email: string
    is_available: boolean
  }
  const checkDuplicateEmail = async (email: string) => {
    const res = await fetch('http://localhost/api/auth/email-check', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    })
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { is_available  }: Body = await res.json()
    return is_available
  }

  return { checkDuplicateEmail }
}