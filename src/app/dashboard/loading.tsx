export default function DashboardLoading() {
  return (
    <div className="min-h-[52vh] flex items-center justify-center">
      <div
        className="text-center"
        role="status"
        aria-live="polite"
      >
        <div className="mx-auto mb-4 h-8 w-8 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />
        <p className="font-heading text-lg font-bold text-text">
          불러오는 중입니다
        </p>
        <p className="mt-1 text-sm text-text-muted">
          구글시트 데이터를 확인하고 있어요. 잠시만 기다려주세요.
        </p>
      </div>
    </div>
  );
}
