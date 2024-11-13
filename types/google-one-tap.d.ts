interface CredentialResponse {
  credential: string
  select_by: string
}

interface Window {
  google: {
    accounts: {
      id: {
        initialize: (config: any) => void
        prompt: () => void
        renderButton: (parent: HTMLElement, options: any) => void
      }
    }
  }
} 