import bgHk from '../images/bg-hk416.jpg'
import bgFn from '../images/bg-f2000.jpg'
import bgM4 from '../images/bg-m4a1.jpg'
import bgTavor from '../images/bg-tavor.jpg'
import bgBenelli from '../images/bg-benelli.jpg'
import bgMk14 from '../images/bg-mk14.jpg'
import bgRpk from '../images/bg-rpk16.jpg'
import bgChey from '../images/bg-m200.jpg'
import phHk from '../images/photo-hk416.jpg'
import phFn from '../images/photo-f2000.jpg'
import phM4 from '../images/photo-m4a1.jpg'
import phTavor from '../images/photo-tavor.jpg'
import phBenelli from '../images/photo-benelli.jpg'
import phMk14 from '../images/photo-mk14.jpg'
import phRpk from '../images/photo-rpk16.jpg'
import phChey from '../images/photo-m200.jpg'
import bgM82 from '../images/bg-m82a1.jpg'
import bgM249 from '../images/bg-m249.jpg'
import phM82 from '../images/photo-m82a1.jpg'
import phM249 from '../images/photo-m249.jpg'

export type Gun = {
  id: string
  name: string
  bg: string
  photo: string
  price: number
  category: string
  kind: string
  stock: number
  badge?: string
  specs: [string, string][]
  history: string[]
}

export const GUNS: Gun[] = [
  {
    id: 'hk416',
    name: 'HK416',
    bg: bgHk,
    photo: phHk,
    price: 28500,
    category: 'Rifles',
    kind: 'AEG',
    stock: 8,
    badge: 'Best seller',
    specs: [['Type', 'AEG'], ['Replica of', 'HK416, Germany'], ['Power', '380 FPS'], ['Magazine', '300 BB hi-cap'], ['Ammo', '6mm BB']],
    history: [
      'Born from a US Delta Force request to improve the M4 carbine in the early 2000s',
      'Heckler & Koch kept the AR-15 layout and added a short stroke gas piston borrowed from the G36',
      'The piston keeps heat and carbon out of the receiver, so it runs cleaner between cleanings',
      'Adopted by the Norwegian armed forces in 2007 and later by the French army',
      'The US Marine Corps fields a version of it as the M27 Infantry Automatic Rifle',
    ],
  },
  {
    id: 'f2000',
    name: 'FN F2000',
    bg: bgFn,
    photo: phFn,
    price: 24500,
    category: 'Rifles',
    kind: 'AEG',
    stock: 5,
    specs: [['Type', 'AEG'], ['Replica of', 'FN F2000, Belgium'], ['Power', '380 FPS'], ['Magazine', '300 BB hi-cap'], ['Ammo', '6mm BB']],
    history: [
      'Designed by FN Herstal in Belgium as a modular weapon system for the 21st century',
      'Revealed in 2001 with an optional 40mm grenade launcher and a fire control sight',
      'The bullpup layout keeps a full length barrel inside a compact body',
      'Spent cases leave through a forward ejection tube, so left and right handed shooters handle it the same',
      'Used by the armed forces of Slovenia and Peru among others',
    ],
  },
  {
    id: 'm4a1',
    name: 'M4A1 SOPMOD II',
    bg: bgM4,
    photo: phM4,
    price: 26500,
    category: 'Rifles',
    kind: 'AEG',
    stock: 12,
    badge: 'New',
    specs: [['Type', 'AEG'], ['Replica of', 'M4A1 SOPMOD II, USA'], ['Power', '380 FPS'], ['Magazine', '120 BB mid-cap'], ['Ammo', '6mm BB']],
    history: [
      'The M4A1 is the full auto carbine version of the M4, built for US special operations',
      'SOPMOD stands for Special Operations Peculiar Modification, a kit of rifle accessories',
      'The Block II kit added a free float rail, optics, lights, lasers, grips and suppressors',
      'The program was managed by the Naval Surface Warfare Center Crane in Indiana',
      'The rail system lets an operator rebuild the same rifle for each mission',
    ],
  },
  {
    id: 'tavor',
    name: 'Tavor X95',
    bg: bgTavor,
    photo: phTavor,
    price: 27900,
    category: 'Rifles',
    kind: 'AEG',
    stock: 6,
    specs: [['Type', 'AEG'], ['Replica of', 'Tavor X95, Israel'], ['Power', '380 FPS'], ['Magazine', '300 BB hi-cap'], ['Ammo', '6mm BB']],
    history: [
      'Evolved from the TAR-21, which entered Israeli Defense Forces service in 2001',
      'The bullpup layout keeps a full length barrel in a short body, ideal for tight urban spaces and vehicles',
      'The X95, also called the Micro Tavor, is a shorter and lighter refinement with better ergonomics',
      'The ejection side can be switched, which makes it usable for left handed shooters',
      'Exported to countries including India and Colombia',
    ],
  },
  {
    id: 'benelli',
    name: 'Benelli M4',
    bg: bgBenelli,
    photo: phBenelli,
    price: 19500,
    category: 'Shotguns',
    kind: 'Gas shotgun',
    stock: 3,
    specs: [['Type', 'Gas shotgun'], ['Replica of', 'Benelli M4, Italy'], ['Power', '330 FPS'], ['Magazine', 'Shell fed'], ['Ammo', '6mm BB']],
    history: [
      'Designed by Benelli in Urbino, Italy as part of the Super 90 shotgun line',
      'Uses the Auto Regulating Gas Operated system, a piston that needs no springs or tuning',
      'Known for reliability in dust, mud and heavy use with very little cleaning',
      'The US Marine Corps adopted it in 1999 as the M1014 Joint Service Combat Shotgun',
      'Semi automatic action that handles a wide range of 12 gauge loads',
    ],
  },
  {
    id: 'mk14',
    name: 'Mk14 EBR',
    bg: bgMk14,
    photo: phMk14,
    price: 32000,
    category: 'Snipers',
    kind: 'AEG marksman',
    stock: 4,
    specs: [['Type', 'AEG marksman'], ['Replica of', 'Mk14 EBR, USA'], ['Power', '400 FPS'], ['Magazine', '120 BB mid-cap'], ['Ammo', '6mm BB']],
    history: [
      'Based on the M14 rifle, which the US military adopted in 1959',
      'The Mk14 Mod 0 was developed by the US Navy and fielded to SEAL teams around 2002',
      'An adjustable chassis stock and rails were added for optics and accessories',
      'Fills the designated marksman role between a standard rifle and a sniper rifle',
      'Used in Iraq and Afghanistan where fights stretched out to longer ranges',
    ],
  },
  {
    id: 'rpk16',
    name: 'RPK16',
    bg: bgRpk,
    photo: phRpk,
    price: 36500,
    category: 'Support',
    kind: 'AEG',
    stock: 2,
    specs: [['Type', 'AEG'], ['Replica of', 'RPK16, Russia'], ['Power', '380 FPS'], ['Magazine', '1500 BB drum'], ['Ammo', '6mm BB']],
    history: [
      'Developed by Kalashnikov Concern as a light machine gun in the AK-12 family',
      'Replaces the older RPK-74 with a modular design, rails and a folding adjustable stock',
      'Fed from a 45 round magazine or a 95 round drum',
      'Fires from a closed bolt with a heavy barrel for better accuracy than a standard rifle',
      'Built to serve as a squad automatic weapon',
    ],
  },
  {
    id: 'm200',
    name: 'CheyTac M200',
    bg: bgChey,
    photo: phChey,
    price: 22500,
    category: 'Snipers',
    kind: 'Spring bolt action',
    stock: 3,
    specs: [['Type', 'Spring bolt action'], ['Replica of', 'CheyTac M200, USA'], ['Power', '480 FPS'], ['Magazine', '60 BB mag'], ['Ammo', '6mm BB']],
    history: [
      'Developed by the American company CheyTac as a complete long range system',
      'The Intervention package pairs the rifle with a ballistic computer and a weather meter',
      'Built around the .408 CheyTac, a cartridge made for extreme range',
      'Marketed for precise hits beyond 2,000 m',
      'Used by military and police units in several countries',
    ],
  },
  {
    id: 'm82a1',
    name: 'Barrett M82A1',
    bg: bgM82,
    photo: phM82,
    price: 38500,
    category: 'Snipers',
    kind: 'Spring bolt action',
    stock: 1,
    badge: 'Limited',
    specs: [['Type', 'Spring bolt action'], ['Replica of', 'Barrett M82A1, USA'], ['Power', '480 FPS'], ['Magazine', '60 BB mag'], ['Ammo', '6mm BB']],
    history: [
      'Designed by Ronnie Barrett in Tennessee in the early 1980s, starting his company around it',
      'A semi automatic rifle in .50 BMG that uses short recoil operation and a large muzzle brake to tame the kick',
      'Sweden bought it as an early military customer in 1989',
      'The US Marine Corps fielded it as the Special Applications Scoped Rifle, and it saw wide use in the Gulf War',
      'Used for precision shots beyond 1,000 m and for disabling vehicles and equipment',
    ],
  },
  {
    id: 'm249',
    name: 'M249 SAW',
    bg: bgM249,
    photo: phM249,
    price: 48500,
    category: 'Support',
    kind: 'AEG',
    stock: 4,
    specs: [['Type', 'AEG'], ['Replica of', 'M249 SAW, USA'], ['Power', '380 FPS'], ['Magazine', '2500 BB box mag'], ['Ammo', '6mm BB']],
    history: [
      'Derived from the FN Minimi, which FN Herstal developed in Belgium and began producing in 1974',
      'The US Army adopted it in 1984 as the M249 Squad Automatic Weapon',
      'Fed from a 200 round belt in a box, with standard rifle magazines as an emergency option',
      'Gives an infantry squad sustained automatic fire in a lighter package than a 7.62mm machine gun',
      'Built for US forces by FN Manufacturing in South Carolina and used by many armies worldwide',
    ],
  },
]

export const CATEGORIES = ['All', 'Rifles', 'Snipers', 'Shotguns', 'Support']
export const FREE_SHIP = 30000

export const peso = (n: number) => '₱' + n.toLocaleString('en-PH')
