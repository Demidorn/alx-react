import React, {useState} from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  // const appliedStyle = isHeader ? css(styles.headerRow) : css(styles.defaultRow);
  const [checked, setChecked] = useState(false);
  const headerStyle = { backgroundColor: "#deb5b545" };
  const rowStyle = { backgroundColor: "#f5f5f5ab" };
  const selected_style = isHeader ? headerStyle : rowStyle;
  return (
    <tr style={selected_style} className={checked ? css(rowstyles.rowChecked) : ""} >
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan={2}  className={css(rowStyle.thcenter)}>
            {textFirstCell}
          </th>
        ) : (
          <>
            <th className={css(rowStyle.th)}>{textFirstCell}</th>
            <th className={css(rowStyle.th)}>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td className={css(rowStyle.td)} >
            <input type='checkbox' onChange={handleCheckedChange} />
            {textFirstCell}
            </td>
          <td className={css(rowStyle.td)} >{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};


const styles = StyleSheet.create({
  thcenter: {
    borderBottom: "1px solid gray",
    margin: 0,
    padding: 0,
    textAlign: "center",
  },
  th: {
    borderBottom: "1px solid gray",
    margin: 0,
    padding: 0,
    textAlign: "left",
  },
  td: {
    paddingLeft: 3,
  },
  rowChecked: {
    backgroundColor: "#e6e4e4",
  },
});

export default CourseListRow;
