'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * Copyright (c) 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule FixedDataTableCellDefault.react
 * @typechecks
 */

var React = require('./React');
var createReactClass = require('create-react-class');

var cx = require('./cx');
var joinClasses = require('./joinClasses');

var PropTypes = React.PropTypes;

/**
 * Component that handles default cell layout and styling.
 *
 * All props unless specified below will be set onto the top level `div`
 * rendered by the cell.
 *
 * Example usage via from a `Column`:
 * ```
 * const MyColumn = (
 *   <Column
 *     cell={({rowIndex, width, height}) => (
 *       <Cell
 *         width={width}
 *         height={height}
 *         className="my-class">
 *         Cell number: <span>{rowIndex}</span>
*        </Cell>
 *     )}
 *     width={100}
 *   />
 * );
 * ```
 */
var FixedDataTableCellDefault = createReactClass({
  propTypes: {

    /**
     * Outer height of the cell.
     */
    height: PropTypes.number,

    /**
     * Outer width of the cell.
     */
    width: PropTypes.number,

    /**
     * Optional prop that if specified on the `Column` will be passed to the
     * cell. It can be used to uniquely identify which column is the cell is in.
     */
    columnKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  },

  render: function render() {
    var divProps = _extends({}, this.props);
    delete divProps.rowIndex;
    var height = divProps.height;
    var width = divProps.width;
    var style = divProps.style;
    var className = divProps.className;
    var children = divProps.children;
    var columnKey = divProps.columnKey;

    var props = _objectWithoutProperties(divProps, ['height', 'width', 'style', 'className', 'children', 'columnKey']);

    var innerStyle = _extends({
      height: height,
      width: width
    }, style);

    return React.createElement(
      'div',
      _extends({}, props, {
        key: columnKey,
        className: joinClasses(cx('fixedDataTableCellLayout/wrap1'), cx('public/fixedDataTableCell/wrap1'), className),
        style: innerStyle }),
      React.createElement(
        'div',
        {
          className: joinClasses(cx('fixedDataTableCellLayout/wrap2'), cx('public/fixedDataTableCell/wrap2')) },
        React.createElement(
          'div',
          {
            className: joinClasses(cx('fixedDataTableCellLayout/wrap3'), cx('public/fixedDataTableCell/wrap3')) },
          React.createElement(
            'div',
            { className: cx('public/fixedDataTableCell/cellContent') },
            children
          )
        )
      )
    );
  }
});

module.exports = FixedDataTableCellDefault;