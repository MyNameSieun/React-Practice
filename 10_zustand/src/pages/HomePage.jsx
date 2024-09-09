import useCounterStore from 'store/counterStore';

const HomePage = () => {
  const { count, increase, discrease } = useCounterStore();

  return (
    <div>
      {count}

      <div>
        <button onClick={increase}>증가</button>
        <button onClick={discrease}>감소</button>
      </div>
    </div>
  );
};

export default HomePage;
