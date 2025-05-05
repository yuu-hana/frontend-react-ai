import ExtensionCard from './ExtensionCard';

function ExtensionList({ extensions, onToggle, onRemove }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, justifyContent: 'flex-start' }}>
      {extensions.map((ext) => (
        <div key={ext.id} style={{ flex: '0 0 400px', maxWidth: 400, minWidth: 400 }}>
          <ExtensionCard
            icon={ext.icon}
            title={ext.title}
            description={ext.description}
            color={ext.color}
            active={ext.active}
            onToggle={() => onToggle(ext.id)}
            onRemove={() => onRemove(ext.id)}
          />
        </div>
      ))}
    </div>
  );
}

export default ExtensionList; 