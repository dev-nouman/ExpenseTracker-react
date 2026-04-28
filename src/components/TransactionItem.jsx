function TransactionItem({ transaction, onDelete }) {

  const sign = transaction.amount > 0 ? "+" : "-";

  return (

    <div className={`item ${transaction.amount > 0 ? "pos" : "neg"}`}>
      <div>
        <div>{transaction.text}</div>

        <div className="small">
          {sign}{Math.abs(transaction.amount)}
        </div>
      </div>

      <div className="delete" onClick={() => onDelete(transaction.id)}>✕</div>
    </div>
  );
}

export default TransactionItem; 