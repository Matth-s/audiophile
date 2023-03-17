const Reload = () => {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <button className="reload-button" onClick={() => handleReload()}>
      Reload me
    </button>
  );
};

export default Reload;
