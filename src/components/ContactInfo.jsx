import { Icon } from '@iconify/react'; 
import { media } from '../assets/constants';

export default function ContactInfo() {
  return (
    <div className="text-container text-white flex-1 flex flex-col gap-10 pb-5">
      <h1 className="text-4xl font-bold leading-20 uppercase tracking-widest font-mono">
        Let's build something <span className="tracking-widest lowercase text-cyan-500">Impactful</span> together!
      </h1>

      <div className="item">
        <h1 className="font-bold text-md tracking-widest uppercase">E-Mail</h1>
        <span className="font-normal text-white/40">mishramilan683@gmail.com</span>
      </div>

      <div className="item flex flex-col gap-6 mt-4">
        <h1 className="font-bold text-md tracking-widest uppercase">Socials</h1>
        <div className="flex flex-row gap-6">
          {media.map((social, index) => (
            <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
              <Icon icon={social.icon} className="w-10 h-10" />
            </a>
          ))}
        </div>
      </div>

      <div className="item flex flex-col gap-5">
        <h1 className="font-bold text-md tracking-widest uppercase">Blogs</h1>
        <a href="https://dev.to/milan_mishra_554c5e235edb" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
          <Icon icon="material-symbols:logo-dev" className="w-10 h-10" />
        </a>
      </div>
    </div>
  );
}
