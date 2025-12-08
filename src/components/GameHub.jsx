import React, { useMemo, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Gamepad, Search, Filter, Star, ArrowLeft } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

function Header({onSearch, searchValue, onToggleSidebar}){
return (
<header className="flex items-center justify-between gap-4 p-4 border-b border-neutral-800">
<div className="flex items-center gap-3">
<button onClick={onToggleSidebar} className="p-2 rounded-lg hover:bg-neutral-800">
<Gamepad size={20} />
</button>
<h1 className="text-xl font-semibold">GameHub</h1>
<span className="text-sm text-neutral-400">— curated game showcase</span>
</div>


<div className="flex items-center gap-2 w-[420px] max-w-full">
<label className="relative flex-1">
<input value={searchValue} onChange={e=>onSearch(e.target.value)} placeholder="Поиск игр, жанров..." className="w-full pl-10 pr-3 py-2 rounded-lg bg-neutral-900 border border-neutral-800 focus:outline-none" />
<Search className="absolute left-3 top-1/2 -translate-y-1/2" size={18} />
</label>
<button className="px-3 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500">Add game</button>
</div>
</header>
);
}

function Sidebar({selectedGenre, onSelectGenre}){
return (
<aside className="w-64 p-4 border-r border-neutral-800 hidden md:block">
<div className="mb-4">
<h2 className="text-sm uppercase text-neutral-400 mb-2">Genres</h2>
<ul className="space-y-2">
<li>
<button onClick={()=>onSelectGenre(null)} className={`w-full text-left py-2 px-3 rounded ${selectedGenre===null ? 'bg-neutral-800' : 'hover:bg-neutral-900'}`}>All</button>
</li>
{genres.map(g => (
<li key={g}>
<button onClick={()=>onSelectGenre(g)} className={`w-full text-left py-2 px-3 rounded ${selectedGenre===g ? 'bg-neutral-800' : 'hover:bg-neutral-900'}`}>{g}</button>
</li>
))}
</ul>
</div>


<div>
<h3 className="text-sm uppercase text-neutral-400 mb-2">Top Rated</h3>
{SAMPLE_GAMES.slice().sort((a,b)=>b.rating-a.rating).slice(0,3).map(g=> (
<div key={g.id} className="flex items-center gap-3 mb-3">
<img src={g.cover} alt="cover" className="w-12 h-8 rounded object-cover" />
<div>
<div className="text-sm">{g.title}</div>
<div className="text-xs text-neutral-400">{g.rating} ★</div>
</div>
</div>
))}
</div>
</aside>
);
}

function GameCard({game}){
return (
<motion.article whileHover={{ scale: 1.02 }} className="bg-neutral-900 rounded-xl overflow-hidden shadow-sm border border-neutral-800">
<Link to={`/game/${game.id}`} className="block">
<div className="h-44 md:h-36 lg:h-44 overflow-hidden">
<img src={game.cover} alt={game.title} className="w-full h-full object-cover" />
</div>
</Link>
<div className="p-3">
<div className="flex items-center justify-between">
<div className="font-semibold">{game.title}</div>
<div className="text-sm text-neutral-400">{game.genre}</div>
</div>
<div className="mt-2 flex items-center justify-between text-sm text-neutral-400">
<div className="flex items-center gap-1"><Star size={14}/> {game.rating}</div>
<div>{currencyCompact(game.players)} players</div>
</div>
</div>
</motion.article>
);
}

function GameGrid({games}){
if (games.length === 0) return <div className="p-6 text-center text-neutral-400">Ничего не найдено по запросу.</div>;
return (
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
{games.map(g => <GameCard key={g.id} game={g} />)}
</div>
);
}

function Home({search, setSearch, genre}){
const filtered = useMemo(()=>{
const q = search.trim().toLowerCase();
return SAMPLE_GAMES.filter(g => (
(!genre || g.genre === genre) &&
(q === '' || g.title.toLowerCase().includes(q) || g.genre.toLowerCase().includes(q))
));
}, [search, genre]);


return (
<main className="p-4">
<div className="mb-4 flex items-center justify-between">
<h2 className="text-lg font-semibold">Featured</h2>
<div className="text-sm text-neutral-400">{filtered.length} games</div>
</div>


<GameGrid games={filtered} />
</main>
);
}

function GameDetail(){
const { id } = useParams();
const nav = useNavigate();
const game = SAMPLE_GAMES.find(g=>g.id === id);
if (!game) return (
<div className="p-8">Game not found. <button onClick={()=>nav('/')} className="ml-2 underline">Go home</button></div>
);
}
