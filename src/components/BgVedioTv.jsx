import vedioBg from "./../assets/biee.mp4"
const BgVedioTv = () => {
    return (
        <div className="items-center text-center w-[240px] z-20">
            <video className=" rounded-2xl" src={vedioBg} autoPlay loop muted />
        </div>
    );
}

export default BgVedioTv;