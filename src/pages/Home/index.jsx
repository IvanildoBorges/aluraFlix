import logoAluraFLIX from '../../assets/logo.png';
import { BotaoCTA } from '../../components/BotaoCTA';

export default function Home() {
    return (
        <>
            <div>
                <a href="/">
                    <img src={logoAluraFLIX} className="logo" alt="Logo AluraFLIX" />
                </a>
            </div>
            <h1>O seu site de streamming favorito!</h1>
            <div>
                <BotaoCTA />
            </div>
        </>
    );
}