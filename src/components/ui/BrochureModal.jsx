import * as React from 'react';

import BrochureForm from './BrochureForm';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './dialog';

export function BrochureModal({ open, onOpenChange, projectTitle }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl border-none bg-transparent p-0 shadow-none">
        <DialogHeader className="sr-only">
          <DialogTitle>Download Brochure</DialogTitle>
        </DialogHeader>
        <div className="relative">
          <BrochureForm projectTitle={projectTitle} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
