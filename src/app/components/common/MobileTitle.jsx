"use client";
const MobileTitle = ({ title, isActive, onClick, content }) => (
    <div className="space-y-4">
        <div
            className="flex items-center justify-between p-4 bg-white bg-opacity-10 cursor-pointer transition-all duration-300 hover:text-black"
            onClick={onClick}
        >
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <span className={`transform transition-transform duration-300 text-white text-xl ${isActive ? 'rotate-180' : ''}`}>▼</span>
        </div>
        {isActive && (
            <div className="px-4 pb-2">
                <div
                    className="p-4 bg-white bg-opacity-20 text-white"
                    style={{
                        boxShadow: "inset 6px 0px 12px rgba(0, 0, 0, 0.2), inset 0px 6px 12px rgba(0, 0, 0, 0.2)"
                    }}
                >
                    <p className="mb-4 text-sm">{content.description}</p>
                    <ul className="space-y-2">
                        {content.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-3 text-sm">
                                <span className="w-1.5 h-1.5 bg-white rounded-full mt-1.5" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )}
    </div>
);

export default MobileTitle;