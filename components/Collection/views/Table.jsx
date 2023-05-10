import React from "react";
import useCollection from "./context/useCollection";

const CollectionTable = ({ fields }) => {
  const { data, onItemClick, onEdit, onDelete, onCustomAction } =
    useCollection();

  return (
    <table>
      {/* Render table header */}
      <thead>
        <tr>
          {fields.map((field) => (
            <th key={field}>{field}</th>
          ))}
          {(onEdit || onDelete || onCustomAction) && <th>Actions</th>}
        </tr>
      </thead>

      {/* Render table body */}
      <tbody>
        {data.map((item) => (
          <tr key={item.id} onClick={() => onItemClick(item)}>
            {fields.map((field) => (
              <td key={`${item.id}-${field}`}>{item[field]}</td>
            ))}
            {(onEdit || onDelete || onCustomAction) && (
              <td>
                {onEdit && (
                  <button onClick={() => onEdit(item)} className="...">
                    Edit
                  </button>
                )}
                {onDelete && (
                  <button onClick={() => onDelete(item)} className="...">
                    Delete
                  </button>
                )}
                {onCustomAction && (
                  <button onClick={() => onCustomAction(item)} className="...">
                    Custom
                  </button>
                )}
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CollectionTable;
