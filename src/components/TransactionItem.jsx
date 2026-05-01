import { CATEGORY_COLORS } from "../components/constants";

function TransactionItem({ transaction, onDelete }) {
  const sign = transaction.amount > 0 ? "+" : "-";

  const tagColor = CATEGORY_COLORS[transaction.category] || '#95a5a6';

  return (
    <div className={`item ${transaction.amount > 0 ? "pos" : "neg"}`}>
      <div>
        <div>
          {transaction.text}
        </div>

        <div className="small">
          {sign}{Math.abs(transaction.amount)}
        </div>
      </div>

      <span
        className="category"
        style={{
          backgroundColor: tagColor
        }}
      >
        {transaction.category}
      </span>

      <div className="delete" onClick={() => onDelete(transaction.id)}>✕</div>
    </div>
  );
}

export default TransactionItem;