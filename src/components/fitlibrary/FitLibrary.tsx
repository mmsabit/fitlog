import { fitType } from "@/type/fit.type";
import FitCard from "./FitCard";




const FitLibrary = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    const exercises = await res.json();

    return (
        <div className="container mx-auto my-12  max-w-9/10">
            <div className="mb-5">
            <h2 className="text-3xl font-bold uppercase text-white">The Library</h2>
            <p className="text-[#9CA3AF]">Twelve lifts covering every major muscle group.</p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                {exercises.map((exercise:fitType) => (
                    <FitCard key={exercise.id} fit={exercise}/>
                ))}
            </div>
        </div>
    );
};

export default FitLibrary;