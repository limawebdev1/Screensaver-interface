import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

import '../styles/global.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}

// https://storybook.js.org/docs/react/writing-stories/decorators#context-for-mocking
// https://stripe.com/docs/stripe-js/react#elements-provider
const stripePromise = loadStripe(
  'pk_test_51IXJsYDXZlbbFGtSuPCZt3sdsWNLFkLmSGJHISK7SadiUjyMOw6V71SEVreR5YQP9OOmlzAgCWuEO1yjYBYUdyBb00VHEoijKR',
)
export const decorators = [
  (Story) => (
    <Elements
      stripe={stripePromise}
      options={{
        fonts: [
          { cssSrc: 'https://fonts.googleapis.com/css?family=IBM+Plex+Mono' }, // todo: switch to CustomFontSource
        ],
      }}
    >
      <Story />
    </Elements>
  ),
]
