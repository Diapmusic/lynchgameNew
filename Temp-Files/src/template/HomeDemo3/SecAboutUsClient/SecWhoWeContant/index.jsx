const Span = () => <span></span>

const SecWhoWeContant = () => {

  return (
    <div className="col-12 col-lg-6">
        <div className="who-we-contant">
            <div className="dream-dots" data-aos="fade-up">
                {Array(7).fill().map((key) => (
                		<Span />
                	))}
            </div>
            <h4 data-aos="fade-up">Wht is Lynch Game</h4>
            <p data-aos="fade-up">Lynch Is an action RPG, fantasy, multiplayer Game that enables players to build their team of Lynchers and compete in epic adventures to earn rewards. </p>
            <p data-aos="fade-up">Lynch is a play-to-earn and play-to-win game that enables active players to earn rewards or win and sell them to other active players. Additionally, players will have full ownership of their in-game items, which they can trade for real money. Lynch will offer a single-player that will control a team of heroes.</p>
         
        </div>
    </div>
  );
}

export default SecWhoWeContant;