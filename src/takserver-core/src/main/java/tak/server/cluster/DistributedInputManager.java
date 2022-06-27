package tak.server.cluster;

import java.util.Collection;

import org.apache.ignite.services.ServiceContext;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.bbn.marti.config.Network.Input;
import com.bbn.marti.remote.InputMetric;
import com.bbn.marti.remote.MessagingConfigInfo;
import com.bbn.marti.remote.groups.ConnectionModifyResult;
import com.bbn.marti.remote.groups.NetworkInputAddResult;
import com.bbn.marti.remote.service.InputManager;
import com.bbn.marti.util.MessagingDependencyInjectionProxy;

import tak.server.Constants;

/**
 */
public class DistributedInputManager implements InputManager, org.apache.ignite.services.Service {
	private static final long serialVersionUID = -2201082174814064404L;
	private static final Logger logger = LoggerFactory.getLogger(DistributedInputManager.class);

	@Override
	public void cancel(ServiceContext ctx) {
		if (logger.isDebugEnabled()) {
			logger.debug(getClass().getSimpleName() + " service cancelled");
		}
	}

	@Override
	public void init(ServiceContext ctx) throws Exception {
		if (logger.isDebugEnabled()) {
			logger.debug("init method " + getClass().getSimpleName());
		}
	}

	@Override
	public void execute(ServiceContext ctx) throws Exception {
		if (logger.isDebugEnabled()) {
			logger.debug("execute method " + getClass().getSimpleName());
		}
	}
	
	@Override
	public NetworkInputAddResult createInput(Input input) {
		return MessagingDependencyInjectionProxy.getInstance().submissionService().addInputAndSave(input);
	}

	@Override
	public ConnectionModifyResult modifyInput(String id, Input input) {
		return MessagingDependencyInjectionProxy.getInstance().submissionService().modifyInputAndSave(id, input);
	}

	@Override
	public void deleteInput(String name) {
		MessagingDependencyInjectionProxy.getInstance().submissionService().removeInputAndSave(name);
	}

	@Override
	public Collection<InputMetric> getInputMetrics() {
		return MessagingDependencyInjectionProxy.getInstance().submissionService().getInputMetrics();
	}

	@Override
	public MessagingConfigInfo getConfigInfo() {
		return MessagingDependencyInjectionProxy.getInstance().submissionService().getMessagingConfig();
	}

	@Override
	public void modifyConfigInfo(MessagingConfigInfo messagingConfigInfo) {
		MessagingDependencyInjectionProxy.getInstance().submissionService().modifyMessagingConfig(messagingConfigInfo);
	}
}
