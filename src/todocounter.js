
import './todoCounter.css';

function TodoCounter({ total, completed }) {
  return (
    <div className='title'>
    <h1 className="TodoCounter">
      Just do it
    </h1>
    <h2 className="TodoCounter">
        Has completado <span>{completed}</span>, de <span>{total}</span> to do
      </h2>
      </div>
  );
}

export { TodoCounter };