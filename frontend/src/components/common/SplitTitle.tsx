import React from 'react';

export default function SplitTitle({ title, className = "" }: { title: string, className?: string }) {
    if (!title) return null;
    
    // Clean any HTML if it accidentally got passed since we split by words
    const cleanTitle = title.replace(/<[^>]+>/g, '').trim();
    const words = cleanTitle.split(' ');
    
    if (words.length <= 1) {
        return (
            <span className={className}>
                <span className="text-[#003B5C]">{cleanTitle}</span>
            </span>
        );
    }
    
    const mid = Math.ceil(words.length / 2);
    const firstHalf = words.slice(0, mid).join(' ');
    const secondHalf = words.slice(mid).join(' ');

    return (
        <span className={className}>
            <span className="text-[#003B5C]">{firstHalf}</span>{' '}
            <span className="text-[#00B4D8]">{secondHalf}</span>
        </span>
    );
}
