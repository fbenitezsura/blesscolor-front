import Button from '@modules/common/components/button/index';

const AboutUs = () => {

    return (
        <div className="mt-[20px] px-[16px] md:px-[0px] max-w-[1180px] mx-auto grid grid-cols-12">
            <div className="col-span-12 md:col-span-6 xl:px-[20px]">
                <img className="h-full" src="/img/hero.webp" />
            </div>
            <div className="col-span-12 md:col-span-6 md:px-[50px] text-center">
                <p className="mt-5">TEAM BlessColor</p>
                <h2 className="mt-6 text-2xl font-bold">Una marca que cambiara el concepto del sustentabilidad.</h2>                
                <p className="mt-5"><strong>Nuestra misión</strong>: Es proporcionar una forma entretenida de ayudar al planeta.</p>
                <Button className="mt-5 btn-secondary">Leer más sobre Bless Colors</Button>
            </div>           
        </div>
    )
}

export default AboutUs;