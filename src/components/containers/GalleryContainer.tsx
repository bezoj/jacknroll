interface IGalleryContainerProps {
  children?: React.ReactNode;
}

export function GalleryContainer({ children }: IGalleryContainerProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">{children}</div>
  );
}
