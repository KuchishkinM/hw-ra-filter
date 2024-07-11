import { Component } from "react";

export default class ToolBar extends Component {
  render() {
    let { filters, selected, onSelectFilter } = this.props
    return (
      <div className={'filter-container'}>
        {filters.map((filter) => {
          const className = 'filter' + (selected === filter ? ' selected' : '')
          return (
            <div className={className} onClick={onSelectFilter}>{filter}</div>)
        }
        )}
      </div>
    )
  }
}

