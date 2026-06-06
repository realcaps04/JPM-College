import { useState } from 'react';
import './YoutubeVideos.css';

interface VideoCard {
  id: string;
  title: string;
  description: string;
  videoId: string;
  category: string;
}

const videos: VideoCard[] = [
  {
    id: '1',
    title: 'Campus Life & Facilities',
    description: 'Explore our state-of-the-art campus, world-class labs, and vibrant student community at JPM College.',
    videoId: 'P8Z24klR9Nw',
    category: 'Campus Tour',
  },
  {
    id: '2',
    title: 'Academic Excellence',
    description: 'Discover our award-winning academic programs, dedicated faculty, and research opportunities that shape future leaders.',
    videoId: '5ltoS_POa3Q',
    category: 'Academics',
  },
  {
    id: '3',
    title: 'Student Achievements',
    description: 'Celebrating the milestones, achievements, and success stories of our talented students and alumni.',
    videoId: '7qZiSJV8j3c',
    category: 'Achievements',
  },
];

export default function YoutubeVideos() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const handlePlay = (videoId: string) => {
    setActiveVideo(videoId);
  };

  return (
    <section className="yt-section section section-gray">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">Our College</p>
          <h2 className="section-title">See Us in Action</h2>
          <p className="section-subtitle">
            Get a closer look at life at JPM College — from our inspiring campus to
            academic achievements and vibrant student culture.
          </p>
        </div>

        <div className="yt-grid">
          {videos.map((video) => (
            <div key={video.id} className="yt-card card">
              <div className="yt-thumbnail-wrap">
                {activeVideo === video.videoId ? (
                  <iframe
                    className="yt-iframe"
                    src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&rel=0`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <img
                      className="yt-thumb-img"
                      src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                      alt={video.title}
                      loading="lazy"
                    />
                    <div className="yt-overlay" onClick={() => handlePlay(video.videoId)}>
                      <button className="yt-play-btn" aria-label={`Play ${video.title}`}>
                        <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </button>
                    </div>
                  </>
                )}
              </div>

              <div className="yt-card-body">
                <span className="badge badge-blue yt-badge">{video.category}</span>
                <h3 className="yt-card-title">{video.title}</h3>
                <p className="yt-card-desc">{video.description}</p>
                {activeVideo !== video.videoId && (
                  <button
                    className="yt-watch-btn btn btn-primary"
                    onClick={() => handlePlay(video.videoId)}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    Watch Now
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
