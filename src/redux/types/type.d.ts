type ThemeState = {
  theme: string
}

type ThemeAction = {
  type: string
}

type DispatchType = (args: ThemeAction) => ThemeAction