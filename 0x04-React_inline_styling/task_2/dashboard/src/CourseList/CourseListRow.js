import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const appliedStyle = isHeader ? css(styles.headerRow) : css(styles.defaultRow);
  return (
    <tr style={appliedStyle}>
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan={2}  className={css(styles.th)}>
            {textFirstCell}
          </th>
        ) : (
          <>
            <th className={css(styles.th)}>{textFirstCell}</th>
            <th className={css(styles.th)}>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
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
  defaultRow: {
    backgroundColor: "#f5f5f5ab",
  },
  headerRow: {
    backgroundColor: "#deb5b545",
  },
  th: {
    borderbottom: '1px solid #ddd',
    width: '80%',
  },
});

export default CourseListRow;
