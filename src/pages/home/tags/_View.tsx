import * as React from 'react'
import { Dispatch, connect } from 'react-redux'
import { State } from '../../../types'
import * as actions from './actions'
import TagPill from './components/TagPill'
import * as select from './selectors'

export interface Props {
  actions: {
    fetchTags: any
  }
  tags: string[]
}

class PopularTags extends React.Component<Props> {
  componentDidMount() {
    this.props.actions.fetchTags()
  }

  render() {
    const tags = this.props.tags.map(tag => <TagPill key={tag} name={tag} />)

    return (
      <React.Fragment>
        <p>Popular Tags</p>

        <div className="tag-list">{tags}</div>
      </React.Fragment>
    )
  }
}

// -----------------------------------------------------------------------------
// CONNECT TO STATE
// -----------------------------------------------------------------------------

function mapStateToProps(state: State) {
  return {
    tags: select.tags(state),
  }
}

function mapDispatchToProps(dispatch: Dispatch<actions.Action>) {
  return {
    actions: {
      fetchTags: (itemId: number) => dispatch(actions.fetchTags()),
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PopularTags)
