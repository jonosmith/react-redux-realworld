import tags from './tags'

// -----------------------------------------------------------------------------
// SETUP (Default Export)
// -----------------------------------------------------------------------------

export default function* sagas() {
  yield [tags.sagas()]
}
