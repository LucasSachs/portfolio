import fotoPerfil from '@/static/fotoperfil.png';
import Link from 'next/link';

interface HeaderProps {
    navBarElements: string[]
}

export function Header({ navBarElements }: HeaderProps) {
    return (
        <div className="flex justify-between items-center p-6">
            <div className="avatar items-center gap-4 text-black">
                <div className="w-12 rounded-full border border-primary">
                    <img src={fotoPerfil.src} alt='Foto de Perfil' />
                </div>

                <span>Lucas Sachs</span>
            </div>

            <ul className='flex gap-12 items-center'>
                {navBarElements.map((element, index) => (
                    <li
                        key={index}
                        className="text-sm text-gray font-medium"
                    >
                        <Link href='#'>
                            {element}
                        </Link>
                    </li>
                ))}

                <button className="btn btn-primary w-32 shadow-md shadow-slate-400 btn-outline">Contato</button>
            </ul>
        </div>
    )
}
