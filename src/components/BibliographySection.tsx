import { BookOpen, ExternalLink, FileText } from 'lucide-react';

const references = [
  {
    authors: 'Mohanty, S. P., Hughes, D. P., & Salathé, M.',
    year: '2016',
    title: 'Using deep learning for image-based plant disease detection',
    journal: 'Frontiers in Plant Science',
    volume: '7',
    doi: '10.3389/fpls.2016.01419',
  },
  {
    authors: 'Barbedo, J. G. A.',
    year: '2018',
    title: 'Impact of dataset size and variety on the effectiveness of deep learning and transfer learning for plant disease classification',
    journal: 'Computers and Electronics in Agriculture',
    volume: '153',
    pages: '46-53',
    doi: '10.1016/j.compag.2018.08.013',
  },
  {
    authors: 'Kamilaris, A., & Prenafeta-Boldú, F. X.',
    year: '2018',
    title: 'Deep learning in agriculture: A survey',
    journal: 'Computers and Electronics in Agriculture',
    volume: '147',
    pages: '70-90',
    doi: '10.1016/j.compag.2018.02.016',
  },
  {
    authors: 'Ferentinos, K. P.',
    year: '2018',
    title: 'Deep learning models for plant disease detection and diagnosis',
    journal: 'Computers and Electronics in Agriculture',
    volume: '145',
    pages: '311-318',
    doi: '10.1016/j.compag.2018.01.009',
  },
  {
    authors: 'Mahlein, A. K.',
    year: '2016',
    title: 'Plant disease detection by imaging sensors – parallels and specific demands for precision agriculture and plant phenotyping',
    journal: 'Plant Disease',
    volume: '100(2)',
    pages: '241-251',
    doi: '10.1094/PDIS-03-15-0340-FE',
  },
  {
    authors: 'Liakos, K. G., Busato, P., Moshou, D., Pearson, S., & Bochtis, D.',
    year: '2018',
    title: 'Machine learning in agriculture: A review',
    journal: 'Sensors',
    volume: '18(8)',
    pages: '2674',
    doi: '10.3390/s18082674',
  },
];

export const BibliographySection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <BookOpen className="w-4 h-4" />
            <span className="text-sm font-medium">References</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Bibliography
          </h2>
          <p className="text-lg text-muted-foreground">
            This project builds upon extensive research in machine learning, 
            computer vision, and precision agriculture.
          </p>
        </div>

        {/* References List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {references.map((ref, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-foreground leading-relaxed">
                    <span className="font-medium">{ref.authors}</span> ({ref.year}). 
                    <span className="italic"> {ref.title}</span>. 
                    <span className="text-muted-foreground"> {ref.journal}</span>
                    {ref.volume && <span className="text-muted-foreground">, {ref.volume}</span>}
                    {ref.pages && <span className="text-muted-foreground">, {ref.pages}</span>}.
                  </p>
                  {ref.doi && (
                    <a
                      href={`https://doi.org/${ref.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-2 text-sm text-accent hover:underline"
                    >
                      DOI: {ref.doi}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Academic Integrity Note */}
        <div className="mt-12 max-w-4xl mx-auto p-6 rounded-2xl bg-primary/5 border border-primary/20">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="font-display font-semibold text-foreground mb-2">
                Academic Integrity Statement
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                This project represents original work developed for educational purposes. 
                All referenced materials are properly cited in accordance with academic standards. 
                The methodologies and implementations draw inspiration from published research 
                while contributing novel approaches to crop health monitoring using AI technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
