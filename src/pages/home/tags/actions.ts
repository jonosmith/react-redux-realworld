import { FETCH_TAGS, SET_TAGS } from './constants'

// ----------------------------------------------------------------------------
// Trigger fetch tags from server
// ----------------------------------------------------------------------------

export interface FetchTags {
  type: FETCH_TAGS
}

export function fetchTags(): FetchTags {
  return {
    type: FETCH_TAGS,
  }
}

// ----------------------------------------------------------------------------
// Set tags in state
// ----------------------------------------------------------------------------

export interface SetTags {
  type: SET_TAGS
  payload: {
    tags: string[]
  }
}

export function setTags(tags: string[]): SetTags {
  // tslint:disable:object-literal-sort-keys
  return {
    type: SET_TAGS,
    payload: {
      tags,
    },
  }
  // tslint:enable:object-literal-sort-keys
}

export type Action = FetchTags | SetTags
