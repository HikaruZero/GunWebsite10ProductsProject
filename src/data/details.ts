export type Part = { name: string; desc: string; x: number; y: number }

export type Detail = {
  about: string[]
  bestFor: string
  real: [string, string][]
  parts: Part[]
}

export const DETAILS: Record<string, Detail> = {
  hk416: {
    about: ['Piston driven carbine built on the AR-15 layout', 'A favorite of special operations units around the world', 'Known for running clean and staying reliable in dirt and heat'],
    bestFor: 'Assault role, close to mid range',
    real: [['Length', '797 to 906 mm'], ['Barrel', '368 mm (14.5 in)'], ['Weight', '3.02 kg empty'], ['Rate of fire', '700 to 900 rpm'], ['Action', 'Short stroke gas piston, rotating bolt'], ['Feed', '30 round STANAG magazine']],
    parts: [
      { name: 'Flash hider', desc: 'Tames muzzle flash and gives a threaded mount for a suppressor.', x: 6, y: 77 },
      { name: 'Handguard', desc: 'Free float quad rail that holds the foregrip, light and other accessories.', x: 28, y: 63 },
      { name: 'Optic', desc: 'Sits on the top rail for a red dot or magnified sight.', x: 44, y: 37 },
      { name: 'Receiver', desc: 'Houses the bolt, the short stroke piston and the fire controls.', x: 58, y: 43 },
      { name: 'Magazine', desc: 'Standard 30 round STANAG style magazine feeds the rifle.', x: 62, y: 68 },
      { name: 'Stock', desc: 'Adjustable buttstock lets the shooter set the length of pull.', x: 88, y: 27 },
    ],
  },
  f2000: {
    about: ['Bullpup rifle with a futuristic polymer shell', 'Forward ejection keeps it comfortable on either shoulder', 'Short body with a full length barrel for tight spaces'],
    bestFor: 'Indoor and tight CQB',
    real: [['Length', '694 mm'], ['Barrel', '400 mm'], ['Weight', '3.6 kg empty'], ['Rate of fire', '850 rpm'], ['Action', 'Gas operated, rotating bolt'], ['Feed', '30 round STANAG magazine']],
    parts: [
      { name: 'Muzzle', desc: 'Front end of the full length barrel, which sits well back inside the body.', x: 91, y: 29 },
      { name: 'Top rail', desc: 'Integrated rail on top carries the optic or sights.', x: 80, y: 20 },
      { name: 'Polymer shell', desc: 'One piece housing wraps the action, keeping the weapon sealed and compact.', x: 30, y: 38 },
      { name: 'Thumbhole grip', desc: 'Grip sits ahead of the magazine for balance and suits left or right hands.', x: 42, y: 57 },
      { name: 'Magazine', desc: 'Standard 30 round magazine sits behind the grip, which saves length.', x: 80, y: 75 },
    ],
  },
  m4a1: {
    about: ['The standard special operations carbine of the US military', 'SOPMOD rail kit lets you rebuild it for any mission', 'Lightweight, easy to handle, and endlessly customizable'],
    bestFor: 'All round play, easy to upgrade',
    real: [['Length', '757 to 838 mm'], ['Barrel', '368 mm (14.5 in)'], ['Weight', '2.88 kg empty'], ['Rate of fire', '700 to 950 rpm'], ['Action', 'Gas operated, direct impingement'], ['Feed', '30 round STANAG magazine']],
    parts: [
      { name: 'Suppressor', desc: 'Muzzle device that cuts noise and flash, shown fitted on this build.', x: 78, y: 36 },
      { name: 'Rail handguard', desc: 'Free float rail for lights, grips and lasers, the core of the SOPMOD kit.', x: 58, y: 36 },
      { name: 'Receiver rail', desc: 'Flat top receiver rail holds sights and optics.', x: 38, y: 27 },
      { name: 'Pistol grip', desc: 'Grip next to the fire selector for semi and full auto.', x: 25, y: 40 },
      { name: 'Collapsible stock', desc: 'Telescoping stock adjusts to fit the shooter and the gear worn.', x: 13, y: 32 },
    ],
  },
  tavor: {
    about: ['Compact bullpup from Israel Weapon Industries', 'Shorter and lighter refinement of the TAR-21', 'Ambidextrous controls and a switchable ejection side'],
    bestFor: 'CQB and vehicle play',
    real: [['Length', '640 mm'], ['Barrel', '419 mm'], ['Weight', '3.3 kg'], ['Rate of fire', '750 to 900 rpm'], ['Action', 'Gas operated, long stroke piston'], ['Feed', '30 round STANAG magazine']],
    parts: [
      { name: 'Flash hider', desc: 'Slotted muzzle device at the front of the barrel.', x: 13, y: 82 },
      { name: 'Handguard rails', desc: 'Front of the shell has rail sections for lights and grips.', x: 37, y: 64 },
      { name: 'Top rail', desc: 'Integral rail on top for sights and optics.', x: 43, y: 27 },
      { name: 'Pistol grip', desc: 'Grip sits ahead of the magazine in the bullpup layout.', x: 62, y: 50 },
      { name: 'Magazine', desc: 'Magazine sits behind the grip, keeping the gun short without losing barrel length.', x: 84, y: 40 },
      { name: 'Rear housing', desc: 'Rear of the shell rests on the shoulder and holds the bolt travel.', x: 82, y: 17 },
    ],
  },
  benelli: {
    about: ['Semi auto combat shotgun from Italy', 'Spring free gas system that needs very little upkeep', 'Adopted by the US military as the M1014'],
    bestFor: 'Close range breaches and indoor games',
    real: [['Length', '886 to 1,010 mm'], ['Barrel', '470 mm'], ['Weight', '3.82 kg'], ['Action', 'Semi auto, ARGO gas system'], ['Gauge', '12 gauge'], ['Feed', 'Tube magazine, 5 to 7 shells plus one in the chamber']],
    parts: [
      { name: 'Muzzle', desc: 'End of the barrel, where shot leaves on the real gun.', x: 84, y: 8 },
      { name: 'Barrel and tube', desc: 'Barrel runs over the magazine tube that holds the shells.', x: 58, y: 18 },
      { name: 'Receiver', desc: 'Holds the bolt and the ARGO gas system that cycles each shot.', x: 27, y: 33 },
      { name: 'Pistol grip stock', desc: 'Pistol grip stock improves control and soaks up recoil.', x: 15, y: 60 },
      { name: 'Shells', desc: 'Shells load into the tube through the port under the receiver.', x: 78, y: 42 },
    ],
  },
  mk14: {
    about: ['Modernized M14 in a tactical chassis stock', 'Hits harder and farther than a 5.56mm rifle', 'Fills the marksman role between rifle and sniper'],
    bestFor: 'Designated marksman, mid to long range',
    real: [['Length', '889 mm'], ['Barrel', '457 mm (18 in)'], ['Weight', '5.1 kg'], ['Rate of fire', '700 to 750 rpm'], ['Action', 'Gas operated, rotating bolt'], ['Feed', '20 round box magazine']],
    parts: [
      { name: 'Scope', desc: 'Magnified optic on the top rail for longer shots.', x: 55, y: 18 },
      { name: 'Muzzle device', desc: 'Flash hider on the barrel end.', x: 93, y: 26 },
      { name: 'Magazine', desc: 'Detachable 20 round box magazine for 7.62mm ammo.', x: 40, y: 50 },
      { name: 'Grip', desc: 'Chassis mounted grip gives a firm hold.', x: 24, y: 64 },
      { name: 'Chassis stock', desc: 'Telescoping stock on the aluminum chassis adjusts for length.', x: 9, y: 55 },
      { name: 'Bipod', desc: 'Folding bipod steadies the rifle for prone shots.', x: 68, y: 68 },
    ],
  },
  rpk16: {
    about: ['Light machine gun in the AK-12 family', 'Heavy barrel for sustained fire and better accuracy', 'Takes standard AK magazines or a 95 round drum'],
    bestFor: 'Squad support and suppressive fire',
    real: [['Length', '900 to 1,080 mm'], ['Barrel', '370 mm or 550 mm'], ['Weight', 'About 4.5 kg'], ['Rate of fire', '700 rpm'], ['Action', 'Gas operated, long stroke piston, rotary bolt'], ['Feed', '45 round magazine or 95 round drum']],
    parts: [
      { name: 'Suppressor', desc: 'Muzzle device that reduces noise and flash, fitted on this build.', x: 9, y: 17 },
      { name: 'Handguard', desc: 'Polymer handguard with built in top and bottom rails.', x: 38, y: 35 },
      { name: 'Bipod', desc: 'Detachable bipod mounts on a rail under the handguard.', x: 40, y: 63 },
      { name: 'Magazine', desc: 'Fed from AK magazines or a high capacity drum.', x: 58, y: 58 },
      { name: 'Receiver', desc: 'Kalashnikov style receiver with the long stroke piston and rotary bolt.', x: 72, y: 48 },
      { name: 'Folding stock', desc: 'Folding and adjustable stock for carry and fit.', x: 85, y: 52 },
    ],
  },
  m200: {
    about: ['Long range bolt action built around the .408 CheyTac', 'Set a 2006 record group of three shots in 42 cm at 2,122 m', 'Retractable stock and quick change barrel for transport'],
    bestFor: 'Long range sniping',
    real: [['Length', '1,187 to 1,300 mm'], ['Barrel', '740 mm (29 in)'], ['Weight', '14 kg'], ['Action', 'Bolt action, rotating bolt'], ['Caliber', '.408 or .375 CheyTac'], ['Feed', '7 round box magazine, 5 round optional']],
    parts: [
      { name: 'Scope', desc: 'High magnification optic for ranges past 1,000 m.', x: 40, y: 16 },
      { name: 'Muzzle brake', desc: 'Vents gas to reduce recoil from the large cartridge.', x: 89, y: 17 },
      { name: 'Receiver and magazine', desc: 'Long action with a detachable box magazine below.', x: 38, y: 50 },
      { name: 'Pistol grip', desc: 'Adjustable grip angle for a steady trigger pull.', x: 25, y: 63 },
      { name: 'Retractable stock', desc: 'Stock collapses for storage and adjusts length of pull.', x: 10, y: 52 },
      { name: 'Bipod', desc: 'Integral bipod keeps the front steady.', x: 72, y: 52 },
    ],
  },
  m82a1: {
    about: ['Semi automatic anti materiel rifle in .50 BMG', 'Short recoil action and muzzle brake tame the kick', 'Reaches beyond 1,000 m and disables equipment'],
    bestFor: 'Long range overwatch',
    real: [['Length', 'About 1,447 mm'], ['Barrel', '737 mm (29 in)'], ['Weight', 'Around 14 to 15 kg'], ['Action', 'Semi auto, short recoil'], ['Caliber', '.50 BMG'], ['Effective range', 'About 1,800 m'], ['Feed', '10 round box magazine']],
    parts: [
      { name: 'Scope', desc: 'Magnified optic mounted on the long top rail.', x: 40, y: 16 },
      { name: 'Muzzle brake', desc: 'Large brake redirects gas to cut felt recoil.', x: 92, y: 19 },
      { name: 'Barrel and receiver', desc: 'Heavy barrel with its ventilated shroud over the recoiling action.', x: 60, y: 28 },
      { name: 'Magazine', desc: 'Detachable 10 round box magazine below the receiver.', x: 32, y: 44 },
      { name: 'Bipod', desc: 'Folding bipod supports the front of the rifle.', x: 53, y: 58 },
      { name: 'Recoil pad', desc: 'Padded butt at the rear softens the push to the shoulder.', x: 7, y: 52 },
    ],
  },
  m249: {
    about: ['Belt fed light machine gun that trades weight for firepower', 'Standard squad support weapon of the US Army since 1984', 'Also takes standard rifle magazines in a pinch'],
    bestFor: 'Squad support and suppressive fire',
    real: [['Length', 'About 1,040 mm'], ['Barrel', '521 mm'], ['Weight', 'About 7.5 kg'], ['Rate of fire', '700 to 1,000 rpm'], ['Action', 'Gas operated, open bolt'], ['Feed', '200 round belt box, or STANAG magazines']],
    parts: [
      { name: 'Suppressor', desc: 'Muzzle device cutting noise and flash on this build.', x: 20, y: 28 },
      { name: 'Carry handle', desc: 'Fixed handle for moving the gun and swapping a hot barrel.', x: 56, y: 23 },
      { name: 'Red dot optic', desc: 'Quick sight mounted on the feed cover rail.', x: 65, y: 30 },
      { name: 'Box magazine', desc: 'Holds a belt of ammunition that feeds up into the gun.', x: 60, y: 66 },
      { name: 'Bipod', desc: 'Folding bipod up front for stable fire.', x: 37, y: 75 },
      { name: 'Rear stock', desc: 'Stock at the back rests on the shoulder.', x: 92, y: 48 },
    ],
  },
}
