import React from 'react';

/*
 * Error boundary. Wraps the app so an unexpected runtime error shows a
 * recovery panel instead of a blank screen.
 */
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    // eslint-disable-next-line no-console
    console.error('Recovered from render error:', error);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? null;
    }
    return this.props.children;
  }
}

export function RouteErrorFallback() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="card max-w-md p-10 text-center">
        <h1 className="font-display text-2xl font-semibold text-foreground">Something glitched.</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          A part of this page failed to render. A refresh usually fixes it.
        </p>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          Reload page
        </button>
      </div>
    </main>
  );
}
